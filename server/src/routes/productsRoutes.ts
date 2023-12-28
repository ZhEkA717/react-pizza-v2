import { Router } from "express";
import ProductController from "../controllers/productController";
import CheckMiddleware from "../middleware/CheckMiddleware";

const productRouter = Router();

productRouter.post('/', CheckMiddleware("admin"), ProductController.create);
productRouter.get('/', ProductController.getALL);
productRouter.get('/:id', ProductController.getOne);
productRouter.delete('/:id',  CheckMiddleware("admin"), ProductController.remove);
productRouter.put('/:id',  CheckMiddleware("admin"), ProductController.update);


export default productRouter;