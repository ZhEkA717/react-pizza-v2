import { Request, Response } from "express";
import { Category, Size, Type } from "../models/models";

export const create = async (
  req: Request,
  res: Response,
  model: typeof Type | typeof Category | typeof Size
) => {
  const item = await model.create(req.body);
  return res.json(item);
};
