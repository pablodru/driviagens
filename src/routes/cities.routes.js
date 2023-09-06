import { Router } from "express";
import { postCity } from "../controllers/cities.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { citySchema } from "../schemas/cities.schema.js";

const cityRouter = Router();

cityRouter.post('/cities', validateSchema(citySchema), postCity);

export default cityRouter;