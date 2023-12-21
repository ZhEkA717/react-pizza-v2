import { Router } from "express";
import categoryRouter from './categoryRoutes';
import typeRouter from "./typeRoutes";
import productRouter from "./productsRoutes";
import userRouter from "./userRoutes";
import sizeRouter from "./sizeRoutes";

const router = Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/category', categoryRouter);
router.use('/product', productRouter);
router.use('/size', sizeRouter);

export default router;