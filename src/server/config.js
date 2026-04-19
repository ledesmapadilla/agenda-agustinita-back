import express from "express";
import cors from "cors";
import morgan from "morgan";
import "./dbconfig.js";
import "colors";

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.middleware();
  }

  middleware() {
    this.app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      next();
    });
    this.app.use(express.json());
    this.app.use(morgan("dev"));
  }

  listen() {
    this.app.listen(this.port, "::", () =>
      console.info(
        `EL SERVIDOR SE ESTA EJECUTANDO EN: http://localhost:${this.port}`.blue,
      ),
    );
  }
}
