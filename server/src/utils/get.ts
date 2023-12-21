import { Request, Response } from "express";
import { Category, Product, Size, Type } from "../models/models";

export const get = async (
  req: Request,
  res: Response,
  model: typeof Type | typeof Category | typeof Size | typeof Product
) => {
  const items = await model.findAll();
  return res.json(items);
};
