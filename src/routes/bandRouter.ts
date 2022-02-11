import { Router, Request, Response, NextFunction } from "express";
import { AuthBusiness } from "../business/AuthBusiness";
import { BandBusiness } from "../business/BandBusiness";
import { BandController } from "../controller/BandController";
import { BandDatabase } from "../data/BandDatabase";
import { Authenticator } from "../services/Authenticator";

const bandRouter = Router();

const bandDataBase = new BandDatabase();
const bandBusiness = new BandBusiness(bandDataBase);
const bandController = new BandController(bandBusiness);

const authenticator = new Authenticator();
const authBusiness = new AuthBusiness(authenticator);

bandRouter.post(
  "/signup",
  (req: Request, res: Response, next: NextFunction) => {
    if (authBusiness.isAdmin(req.body.token)) next();
    else res.status(403).send("You are not admin");
  },
  (req: Request, res: Response) => {
    bandController.registerBand(req, res);
  }
);

bandRouter.post(
  "/detail/:identification",
  (req: Request, res: Response, next: NextFunction) => {
    if (authBusiness.isUser(req.body.token)) next();
    else res.status(403).send("You are not user");
  },
  (req: Request, res: Response) => {
    bandController.detailsBand(req, res);
  }
);

export { bandRouter };
