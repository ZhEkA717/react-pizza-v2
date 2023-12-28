import { NextFunction,Request, Response, Router } from "express";
import TypeController from "../controllers/typeController";
import CheckMiddleware from "../middleware/CheckMiddleware";

const typeRouter = Router();

typeRouter.post('/', CheckMiddleware("admin"), TypeController.add);
typeRouter.get('/',  TypeController.getALL);
typeRouter.delete('/:id',  CheckMiddleware("admin"), TypeController.remove);
typeRouter.put('/:id',  CheckMiddleware("admin"),TypeController.update);


export default typeRouter;