import { Request, Response } from "express";
import { Category, Product, Size, Type } from "../models/models";

export const _delete = async (
  req: Request,
  res: Response,
  model: typeof Type | typeof Category | typeof Size | typeof Product
) => {
  const { id } = req.params;
  const deleted = await model.findOne({where: {id}});
  await model.destroy({
    where: { id },
  });
  return deleted;
};
