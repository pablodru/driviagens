import { Router } from "express";
import postTravel from "../controllers/travels.controller.js";

const travelRouter = Router();

travelRouter.post('/travels', postTravel);

export default travelRouter;