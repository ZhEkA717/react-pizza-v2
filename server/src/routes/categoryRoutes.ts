import { Router } from "express";
import CategoryController from "../controllers/categoryController";

const categoryRouter = Router();

categoryRouter.post('/', CategoryController.add);
categoryRouter.get('/', CategoryController.getALL);
categoryRouter.delete('/:id', CategoryController.remove);
categoryRouter.put('/:id', CategoryController.update);


export default categoryRouter;