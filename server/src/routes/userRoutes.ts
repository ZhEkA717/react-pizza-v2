import { Router } from "express";
import UserController from "../controllers/userController";
import AuthMiddleware from "../middleware/AuthMiddleware";

const userRouter = Router();

userRouter.post('/registration', UserController.registration);
userRouter.post('/login', UserController.login);
userRouter.get('/auth', AuthMiddleware, UserController.check)


export default userRouter;