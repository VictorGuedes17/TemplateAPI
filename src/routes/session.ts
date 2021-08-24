import express, { Request, Response } from 'express';

import SessionsController from "../controllers/sessionsController";


export default class SessionRoutes {

  public sessionController: SessionsController = new SessionsController();

  public router: express.Router = express.Router();

  public routes(app:any) : any {
    this.router.get('/', (req: Request, res: Response) => this.sessionController.create(req, res));

    app.use('/auth', this.router);
  }
}