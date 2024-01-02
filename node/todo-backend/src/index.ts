import express from "express";
import config from "./config";
import router from "./routes";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

const app = express();

app.use(express.json());

app.use(router);

const port = config.app.port;

app.listen(port, () => {
  console.log(`port at ${port}`);
});
