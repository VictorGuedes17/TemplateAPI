import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

class SessionsController {
  async create(req: Request, res: Response): Promise<Response> {
    const id = 60;
    const jwtSalt = process.env.JWT_SALT || '';
    return res
      .header('Authorization', `Bearer ${jwt.sign({ id }, jwtSalt, { expiresIn: '30d' })}`)
      .json({ user: { id } });
  }
}

export default SessionsController;
