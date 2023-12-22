import { Router } from "express";
import SizeController from "../controllers/sizeController";

const sizeRouter = Router();

sizeRouter.post('/', SizeController.add);
sizeRouter.get('/', SizeController.getALL);
sizeRouter.delete('/:id', SizeController.remove);
sizeRouter.put('/:id', SizeController.update);


export default sizeRouter;