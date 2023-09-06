import { Router } from "express";
import { getPassengerTravels, postPassenger } from "../controllers/passengers.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { passengersSchema } from "../schemas/passengers.schema.js";

const passengerRouter = Router();

passengerRouter.post('/passengers', validateSchema(passengersSchema), postPassenger);
passengerRouter.get('/passengers/travels', getPassengerTravels);

export default passengerRouter;