import { Request, Response, NextFunction } from "express";
import ApiError from "../error/ApiError";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User, Basket } from '../models/models';

const generateJwt = (id:  number, email: string, role: 'user' | 'admin', expiresIn?:string ) => {
  return jwt.sign({id, email, role}, 
    String(process.env.SECRET_KEY), {
    expiresIn: expiresIn || '24h'
  });
}

export type TypeTokenDecoded = {
  id: number,
  email: string,
  role: 'user' | 'admin',
  iat: number,
  exp: number
}

class UserController {

  async registration(req: Request, res: Response, next: NextFunction) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Incorrect email or password"));
    }

    const candidate = await User.findOne({where: {email}});
    if (candidate) {
      return next(ApiError.badRequest("User such us name already exists"));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({email, password:hashPassword, role});
    const basket = await Basket.create({userId: user.dataValues.id})
    const token = generateJwt(user.dataValues.id, email, role);
    return res.json(token);
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const user = await User.findOne({where: {email}});
    if (!user) {
      return next(ApiError.internal("User not found "));
    }
    const comparePassword = bcrypt.compareSync(password, user.dataValues.password);
    if (!comparePassword) {
      return next(ApiError.internal("Incorrect password"));
    }

    const token = generateJwt(user.dataValues.id, user.dataValues.email, user.dataValues.role);
    return res.json(token);
  }

  async check(req: Request, res: Response) {
    const { token } = req.headers;
    return res.json(token);
  }
}

export default new UserController();