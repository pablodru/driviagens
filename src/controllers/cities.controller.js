import { cityService } from "../services/cities.service.js";

export async function postCity ( req, res ) {
    const { name } = req.body;

    await cityService.postCity(name);

    return res.sendStatus(200)
}