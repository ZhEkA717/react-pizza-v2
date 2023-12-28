import {  Request, Response, NextFunction } from 'express';
import AuthMiddleware from './AuthMiddleware';

export default function(role: 'user' | 'admin') {
    return (req: Request, res: Response, next: NextFunction) => AuthMiddleware(req, res, next, role)
}