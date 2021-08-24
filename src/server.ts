import express, { RequestHandler } from 'express';
import cors from 'cors';
import { Routes } from './Routes';
import jwtAuthHook from './hooks/jwtAuthHook';
import 'dotenv';
import { createConnection } from 'typeorm';

createConnection().then(async connection => {
  class Api {
    public app: express.Application;
    public routes: Routes;

    constructor() {
      this.app = express();
      this.app.use(express.json());
      this.app.listen(process.env.PORT);
      this.config();
      this.app.use(jwtAuthHook as RequestHandler)
      this.routes = new Routes(this.app);
    }

    private config(): void {
      this.app.use(cors());
    }
  }

  module.exports = new Api().app;
  console.log("App iniciado na porta: ", process.env.PORT)
}).catch((e: any) => {
  console.log("Erro de conexão com o banco de dados: ", e)
})

