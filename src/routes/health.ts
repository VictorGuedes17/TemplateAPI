import express, { Request, Response } from 'express';

import HealthController from "../controllers/healthController";


export default class HealthRoutes {

  public healthController: HealthController = new HealthController();

  public router: express.Router = express.Router();

  public routes(app:any) : any {
    this.router.get('/', (req: Request, res: Response) => this.healthController.status(req, res));

    app.use('/health', this.router);
  }
}