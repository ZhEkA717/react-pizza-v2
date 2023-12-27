import { Request, Response } from "express";
import { Category, Size, Type } from "../models/models";
import { IProduct } from "../types/products";

export const put = async (
  req: Request,
  res: Response,
  model: typeof Type | typeof Category | typeof Size,
  body?: IProduct,
) => {
  const { id } = req.params;
  await model.update(body || req.body, {
    where: { id },
  });
  return res.json(id);
};
