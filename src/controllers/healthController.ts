import { Request, Response } from 'express';

class HealthController {
  async status(req: Request, res: Response): Promise<Response> {
    return res.status(200).send({ status: true });
  }
}

export default HealthController;
