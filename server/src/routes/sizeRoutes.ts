import { Router } from "express";
import SizeController from "../controllers/sizeController";
import CheckMiddleware from "../middleware/CheckMiddleware";

const sizeRouter = Router();

sizeRouter.post('/',  CheckMiddleware("admin"), SizeController.add);
sizeRouter.get('/', SizeController.getALL);
sizeRouter.delete('/:id',  CheckMiddleware("admin"), SizeController.remove);
sizeRouter.put('/:id',  CheckMiddleware("admin"), SizeController.update);


export default sizeRouter;