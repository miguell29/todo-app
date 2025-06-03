import express from "express";

export default class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 3000;
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Servidor funcionando en: http://localhost:${this.PORT}`);
    });
  }
}
