import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";

export default  function(req: Request, res: Response, next: NextFunction, role: 'user' | 'admin' = 'user') {
    if (req.method === "OPTIONS") {
        next();
    }

    try {
        const token = req.headers.authorization?.split(' ')[1] // Bearer [token]
        if (!token) {
            return res.status(401).json({
                message: "user don't authorization"
            })
        }
        const decoded = jwt.verify(token, String(process.env.SECRET_KEY)) as jwt.JwtPayload; // если токен не совпадает выбрасывется исключение
        if (decoded?.role !== role) {
            return res.status(401).json({message: 'No access'})
        }
        req.headers.token = token;
        next();
    } catch(err: JsonWebTokenError | any) {
        const { message } = err;
        res.status(401).json({ message })
    }
}