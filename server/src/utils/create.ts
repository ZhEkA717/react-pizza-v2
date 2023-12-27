import { Request, Response } from "express";
import { Category, Product, Size, Type } from "../models/models";
import { IProduct } from "../types/products";

export const create = async (
  req: Request,
  res: Response,
  model: typeof Type | typeof Category | typeof Size | typeof Product,
  body?: IProduct
) => {
  const item = await model.create(body || req.body);
  return item;
};
