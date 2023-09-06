import httpStatus from "http-status";
import { cityService } from "../services/cities.service.js";

export async function postCity ( req, res ) {
    const { name } = req.body;

    try {

        await cityService.postCity(name);

        return res.sendStatus(200)

    } catch (err) {

        if (err.type === "conflict") {
            return res.status(httpStatus.CONFLICT).send(err.message)
        }

        return res.status(500).send(err.message)
    }
}