import { NextFunction, Request, Response } from "express";
import { Product } from "../models/models";
import ApiError from "../error/ApiError";
import { _delete, get, getById, removeImg } from "../utils";
import { generateFileName } from "../utils/generateFileName";

class ProductController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;

      const { filename, saveStaticImage } = generateFileName(req);
   
      const types = body.types.split(",").map((item: string) => Number(item));
      const sizes = body.sizes.split(",").map((item: string) => Number(item));

      const createBody = {
        ...body,
        types,
        sizes,
        imageUrl: filename,
      }

      const product = await Product.create(createBody);
      saveStaticImage();

      return res.json(product);
    } catch (err: any) {
      next(ApiError.badRequest(err.message));
    }
  }

  async getALL(req: Request, res: Response) {
    return await get(req, res, Product);
  }

  async getOne(req: Request, res: Response) {
    return await getById(req, res, Product);
  }

  async remove(req: Request, res: Response) {
    const item = (await _delete(req, res, Product))?.toJSON();
    if (item) await removeImg(item.imageUrl);
    return res.json(item);
  }

  async update(req: Request, res: Response) {
    
  }
}

export default new ProductController();
