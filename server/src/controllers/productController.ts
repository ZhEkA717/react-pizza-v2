import { NextFunction, Request, Response } from "express";
import { Product } from "../models/models";
import ApiError from "../error/ApiError";
import { _delete, create, getById, put, removeImg, generateBody, generateFileName } from "../utils";
import { Op } from "sequelize";

class ProductController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { filename, saveStaticImage } = generateFileName(req);
      const body = generateBody(req, filename);
      const product = await create(req, res, Product, body);
      saveStaticImage();
      return res.json(product);
    } catch (err: any) {
      next(ApiError.badRequest(err.message));
    }
  }

  async getALL(req: Request, res: Response) {
    const { categoryId, search, order, sort, page, size } = req.query;
    let options;
   
    if (!categoryId && !search) {
      options = {};
    }
    if (categoryId && !search) {
      Number(categoryId) === 1 ?
      options = {} :
      options = { where: { categoryId } }
    }
    if (!categoryId && search) {
      options = {
        where: {
          title: { [Op.iLike]: `%${search}%` },
        },
      }
    }

    if (categoryId && search) {
      options = {
        where: {
          categoryId,
          title: { [Op.iLike]: `%${search}%` },
        },
      }
    }

    const product: any = await Product.findAndCountAll({
      ...options,
      order: [
        [
          sort ? String(sort) : 'id', 
          order ? String(order) : 'ASC'
        ],
      ],
      limit: Number(size) || 3,
      offset: Number(page) * Number(size) || 0,
    });
    return res.json(product);
  }

  async getOne(req: Request, res: Response) {
    return res.json(await getById(req, res, Product));
  }

  async remove(req: Request, res: Response) {
    const item = (await _delete(req, res, Product))?.toJSON();
    if (item) await removeImg(item.imageUrl);
    return res.json(item);
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const item = await Product.findOne({
      where: { id },
    });
    try {
      if (item) {
        await removeImg(item.dataValues.imageUrl);
        const { filename, saveStaticImage } = generateFileName(req);
        const body = generateBody(req, filename);
        const updateProduct = await put(req, res, Product, body);
        saveStaticImage();
        return updateProduct;
      }
    } catch (err: any) {
      next(ApiError.badRequest(err.message));
    }
  }
}

export default new ProductController();
