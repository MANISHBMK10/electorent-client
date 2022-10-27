import express from "express";
import logger from "morgan";
import fs from "fs";
import path from "path";
import { indexRouter } from "./routes/index.js";
import { PORT } from "./config/config.js";
import { db } from "./config/mongoose.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import morgan from "morgan";
const app = express();
import { fileURLToPath } from "url";
import { dirname } from "path";
import fsr from "file-stream-rotator";
const swaggerDocument = YAML.load("./swagger.yaml");
import cors from "cors";
import "dotenv/config";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Morgan Middleware

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename + "logfiles");

let logStream = fsr.getStream({
  filename: "logs/file.log ",
  frequency: "1h",
  verbose: true,
});
app.use(
  morgan(":method :url :status :date[iso] :response-time ms", {
    stream: logStream,
  })
);
app.use("/api", indexRouter);

app.listen(PORT, (e) => {
  if (e) {
    return console.log("error in starting the router");
  }
  console.log(`server is up and runnning on port ${PORT}`);
});
