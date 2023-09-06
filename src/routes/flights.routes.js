import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { flightSchema } from "../schemas/flights.schema.js";
import { postFlight, getFlights } from "../controllers/flights.controller.js";

const flightRouter = Router();

flightRouter.post('/flights', validateSchema(flightSchema), postFlight);
flightRouter.get('/flights', getFlights);

export default flightRouter;