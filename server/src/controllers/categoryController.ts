import { NextFunction, Request, Response } from "express";
import { create, get, _delete, put } from '../utils';
import { Category } from "../models/models";

class CategoryController {
  public add = async (req: Request, res: Response) => await create(req, res, Category);
  public getALL = async (req: Request, res: Response) => await get(req, res, Category);
  public remove = async (req: Request, res: Response, next: NextFunction) => await _delete(req, res, Category, next);
  public update = async (req: Request, res: Response) => await put(req, res, Category);
}

export default new CategoryController();