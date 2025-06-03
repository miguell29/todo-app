import express from "express";
import router from "../routes/TaskRoutes.js";

export default class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 3000;
    this.taskPath = "/api/task";
    this.middleware();
    this.routes();
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Servidor funcionando en: http://localhost:${this.PORT}`);
    });
  }

  routes() {
    this.app.use(this.taskPath, router);
  }
  middleware() {
    this.app.use(express.json());
  }
}
