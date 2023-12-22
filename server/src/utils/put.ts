import { Request, Response } from "express";
import { Category, Size, Type } from "../models/models";

export const put = async (
  req: Request,
  res: Response,
  model: typeof Type | typeof Category | typeof Size
) => {
  const { id } = req.params;
  const updated = await model.update(req.body, {
    where: { id },
  });
  return res.json(id);
};
