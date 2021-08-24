import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import httpErrors from '../utils/httpErrors';

export default (request: Request, response: Response, next: NextFunction): NextFunction | Response | undefined => {
  const allowList = ['/auth', '/api/v1/sessions'];
  if (request.url.match(allowList.join('|'))) next();

  const { headers } = request;
  const { authorization: authHeader } = headers;

  if (!authHeader) {
    return response.status(401).json(httpErrors.unauthorized('Token').toString());
  }

  const [prefix, token] = authHeader.split(' ');

  if (!/^Bearer$/i.test(prefix)) {
    return response.status(401).json(httpErrors.unauthorized('Token').toString());
  }

  try {
    const jwtSalt = process.env.JWT_SALT || '';
    const decoded = jwt.verify(token, jwtSalt);
    const { id }: any = decoded;
    request.user_id = id;
    next();
  } catch (error) {
    return response.status(401).json(httpErrors.unauthorized('Token').toString());
  }
};
