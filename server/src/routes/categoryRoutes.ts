import { Router } from "express";
import CategoryController from "../controllers/categoryController";
import CheckMiddleware from "../middleware/CheckMiddleware";

const categoryRouter = Router();

categoryRouter.post('/', CheckMiddleware("admin"),CategoryController.add);
categoryRouter.get('/', CategoryController.getALL);
categoryRouter.delete('/:id', CheckMiddleware("admin"), CategoryController.remove);
categoryRouter.put('/:id', CheckMiddleware("admin"), CategoryController.update);


export default categoryRouter;