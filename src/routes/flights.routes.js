import { Router } from "express";
import { validateSchema, validateSchemaQuery } from "../middlewares/validateSchema.middleware.js";
import { flightSchema, queryFlightSchema } from "../schemas/flights.schema.js";
import { postFlight, getFlights } from "../controllers/flights.controller.js";

const flightRouter = Router();

flightRouter.post('/flights', validateSchema(flightSchema), postFlight);
flightRouter.get('/flights', validateSchemaQuery(queryFlightSchema), getFlights);

export default flightRouter;