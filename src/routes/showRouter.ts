import { NextFunction, Request, Response, Router } from "express";
import { AuthBusiness } from "../business/AuthBusiness";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowController } from "../controller/ShowController";
import { ShowDatabase } from "../data/ShowDatabase";
import { Authenticator } from "../services/Authenticator";

const showRouter = Router();

const showDatabase = new ShowDatabase();
const showBusiness = new ShowBusiness(showDatabase);
const showController = new ShowController(showBusiness);

const authenticator = new Authenticator();
const authBusiness = new AuthBusiness(authenticator);

showRouter.post(
  "/sign",
  (req: Request, res: Response, next: NextFunction) => {
    if (authBusiness.isAdmin(req.body.token)) next();
    else res.status(403).send("You are not user");
  },
  (req: Request, res: Response) => {
    showController.addShowToDay(req, res);
  }
);

showRouter.post(
  "/:weekDay",
  (req: Request, res: Response, next: NextFunction) => {
    if (authBusiness.isUser(req.body.token)) next();
    else res.status(403).send("You are not user");
  },
  (req: Request, res: Response) => {
    showController.getShows(req, res);
  }
);

export { showRouter };
