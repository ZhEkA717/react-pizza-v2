import { NextFunction, Request, Response } from "express";
import { Type } from "../models/models";
import { create, get, _delete, put } from '../utils';

class TypeController {
  public add = async (req: Request, res: Response) => await create(req, res, Type);
  public getALL = async (req: Request, res: Response) => await get(req, res, Type);
  public remove = async (req: Request, res: Response, next: NextFunction) => await _delete(req, res, Type, next);
  public update = async (req: Request, res: Response) => await put(req, res, Type);
}

export default new TypeController();