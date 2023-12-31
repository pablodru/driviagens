import express from "express";
import cors from "cors";
import "express-async-errors"
import router from "./routes/index.routes.js";
import dotenv from "dotenv";
import errorHandler from "./middlewares/errors.middleware.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port , () => console.log(`Servidor rodando na porta ${port}`))