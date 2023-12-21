import { Router } from "express";
import CategoryController from "../controllers/categoryController";

const categoryRouter = Router();

categoryRouter.post('/', CategoryController.add);
categoryRouter.get('/', CategoryController.getALL);
categoryRouter.delete('/', CategoryController.remove);
categoryRouter.put('/', CategoryController.update);


export default categoryRouter;