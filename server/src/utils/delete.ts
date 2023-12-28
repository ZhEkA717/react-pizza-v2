import { NextFunction, Request, Response } from "express";
import { Category, Product, Size, Type } from "../models/models";
import ApiError from "../error/ApiError";

export const _delete = async (
  req: Request,
  res: Response,
  model: typeof Type | typeof Category | typeof Size | typeof Product,
  next: NextFunction,
) => {
  const { id } = req.params;
  const deleted = await model.findOne({where: {id}});
  await model.destroy({
    where: { id },
  });
  if (!deleted) {
    return next(ApiError.badRequest('NOT FOUND'));
  }
  return deleted;
};
