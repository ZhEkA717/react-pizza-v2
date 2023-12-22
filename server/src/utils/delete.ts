import { Request, Response } from "express";
import { Category, Product, Size, Type } from "../models/models";
import fs from 'fs';
import path from "path";

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

export const removeImg = async (url: string) => {
  fs.unlink(path.resolve(__dirname, '../static', url), (err) => {
    err
        ? console.log('FS operation failed')
        : console.log('File deleted successfully!');
  })
}
