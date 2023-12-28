import { Request, Response } from "express";
import { Category, Product, Size, Type } from "../models/models";

export const getById = async (
  req: Request,
  res: Response,
  model: typeof Type | typeof Category | typeof Size | typeof Product 
) => {
  const { id } = req.params;
  const item = await model.findOne({
    where: { id },
  });
  return item;
};
