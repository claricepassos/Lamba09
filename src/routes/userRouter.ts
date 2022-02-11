import { Router, Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../data/UserDatabase";

const userRouter = Router();

const userDataBase = new UserDatabase()
const userBusiness = new UserBusiness(userDataBase)
const userController = new UserController(userBusiness);

userRouter.post("/signup", (req: Request, res: Response) => {
    userController.signup(req, res)
});
userRouter.post("/login", (req: Request, res: Response) => {
    userController.login(req, res)
});

export { userRouter }