import { Router } from "express";
import ProductController from "../controllers/productController";

const productRouter = Router();

productRouter.post('/', ProductController.create);
productRouter.get('/', ProductController.getALL);
productRouter.get('/:id', ProductController.getOne);


export default productRouter;