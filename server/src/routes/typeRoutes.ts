import { Router } from "express";
import TypeController from "../controllers/typeController";

const typeRouter = Router();

typeRouter.post('/', TypeController.add);
typeRouter.get('/', TypeController.getALL);
typeRouter.delete('/:id', TypeController.remove);
typeRouter.put('/:id', TypeController.update);


export default typeRouter;