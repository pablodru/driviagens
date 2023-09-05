import { Router } from "express";

const flightRouter = Router();

flightRouter.post('/flights', postFlight);
flightRouter.get('/flights', getFlights);

export default flightRouter;