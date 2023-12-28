import { NextFunction, Request, Response } from "express";
import { Product } from "../models/models";
import ApiError from "../error/ApiError";
import { _delete, create, put, removeImg, generateBody, generateFileName } from "../utils";
import { Op } from "sequelize";

class ProductController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { filename, saveStaticImage } = generateFileName(req);
      const body = generateBody(req, filename);
      const product = await create(req, res, Product, body);
      saveStaticImage();
      res.statusMessage = 'Created';
      res.status(201);
      return res.json(product);
    } catch (err: any) {
      next(ApiError.badRequest(err.message));
    }
  }

  async getALL(req: Request, res: Response) {
    const { category, search, order, sort, page, limit } = req.query;

    let options;
   
    if (!category && !search) {
      options = {};
    }
    if (category && !search) {
      Number(category) === 1 ?
      options = {} :
      options = { where: { category } }
    }
    if (!category && search) {
      options = {
        where: {
          title: { [Op.iLike]: `%${search}%` },
        },
      }
    }

    if (category && search) {
      options = {
        where: {
          category,
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
      limit: Number(limit) || 3,
      offset: Number(page) * Number(limit) - Number(limit) || 0,
    });
    return res.json(product);
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params;
    const product = await Product.findOne({
      where: {id},
      // include: [
      //   {model: Category, as: 'category' }
      // ]
    })
    if (!product) {
      return next(ApiError.badRequest('NOT FOUND'));
    }
    return res.json(product);
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    const item = (await _delete(req, res, Product, next))?.toJSON();
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
        return res.json(updateProduct);
      } else {
        next(ApiError.badRequest("NOT FOUND"));
      }
    } catch (err: any) {
      next(ApiError.badRequest(err.message));
    }
  }
}

export default new ProductController();
