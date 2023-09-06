import { Router } from "express";
import { postTravel } from "../controllers/travels.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { travelSchema } from "../schemas/travels.schema.js";

const travelRouter = Router();

travelRouter.post('/travels', validateSchema(travelSchema), postTravel);

export default travelRouter;