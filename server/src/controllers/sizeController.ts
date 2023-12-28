import { NextFunction, Request, Response } from "express";
import { create, get, _delete, put } from '../utils';
import { Size } from "../models/models";

class SizeController {
  public add = async (req: Request, res: Response) => res.json(await create(req, res, Size));
  public getALL = async (req: Request, res: Response) => res.json(await get(req, res, Size));
  public remove = async (req: Request, res: Response, next: NextFunction) => res.json(await _delete(req, res, Size, next));
  public update = async (req: Request, res: Response) => res.json(await put(req, res, Size));
}

export default new SizeController();