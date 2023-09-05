import { Router } from "express";
import { getPassengerTravels, postPassenger } from "../controllers/passengers.controller.js";

const passengerRouter = Router();

passengerRouter.post('/passengers', postPassenger);
passengerRouter.get('/passengers/travels', getPassengerTravels);

export default passengerRouter;