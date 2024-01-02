import express from "express";
import config from "./config";
import router from "./routes";
import { genericErrorHandler, notFoundError } from "./middlewares/errorhandler";
import { logger } from "./middlewares/logger";

const app = express();

app.use(express.json());

app.use(logger);

app.use(router);

app.use(genericErrorHandler);
app.use(notFoundError);

const port = config.app.port;

app.listen(port, () => {
  console.log(`port at ${port}`);
});
