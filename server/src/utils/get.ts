import { Request, Response } from "express";
import { Category, Product, Size, Type } from "../models/models";
import { Op } from "sequelize";

export const get = async (
  req: Request,
  res: Response,
  model: typeof Type | typeof Category | typeof Size | typeof Product
) => { 
  const item = await model.findAll();
  return item;
};
