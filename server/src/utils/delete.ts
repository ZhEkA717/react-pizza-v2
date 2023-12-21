import { Request, Response } from "express";
import { Category, Size, Type } from "../models/models";

export const _delete = async (
  req: Request,
  res: Response,
  model: typeof Type | typeof Category | typeof Size
) => {
  const { id } = req.params;
  await model.destroy({
    where: { id },
  });
  return res.json(id);
};
