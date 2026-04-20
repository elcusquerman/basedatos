import express from "express";
import v1Router from "./v1/index.js";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./v1/config/db.js";
import { notFoundMiddleware } from "./v1/middlewares/notFound.middleware.js";
import { errorMiddleware } from "./v1/middlewares/errorMiddleware.middleware.js";

// inicializar con ´npm i express´ si falta node_modules
// usar ´npm run dev´ para nodemon

dotenv.config(); //dotenv
connectDB(); //mongoose

const app = express();
app.use(cors()); //cors

app.use(express.json()); //express
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.json({ mensaje: "API funcionando. Deploy correcto." }),
);

app.use("/v1", v1Router);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;