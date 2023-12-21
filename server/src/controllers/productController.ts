import { NextFunction, Request, Response } from "express";
import { FileArray, UploadedFile } from "express-fileupload";
import path from "path";

import uuid from "uuid";
import { Product } from "../models/models";
import ApiError from "../error/ApiError";
import { get } from "../utils";

class ProductController {
  async create(req: Request, res: Response, next: NextFunction) {
   try {
    const {body} = req;
    const file:FileArray | null | undefined= req.files;
    const imageUrl = file?.imageUrl as UploadedFile;
    let filename = uuid?.v4() + ".jpg";
    imageUrl?.mv(path.resolve(__dirname, '..', 'static',  filename));

    const product = await Product.create({
      ...body,
      imageUrl: filename,
    });
    console.log(req.body);
    return res.json(product);
   } catch(err: any) {
    console.log('err');
    next(ApiError.badRequest(err.message));
   }
  }

  async getALL(req: Request, res: Response) {
    return await get(req, res, Product);
  }
  async getOne(req: Request, res: Response) {}
}

export default new ProductController();