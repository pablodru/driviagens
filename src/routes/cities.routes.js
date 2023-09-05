import { Router } from "express";
import postCity from "../controllers/cities.controller.js";

const cityRouter = Router();

cityRouter.post('/cities', postCity);

export default cityRouter;