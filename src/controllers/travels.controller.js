import { travelService } from "../services/travels.service.js";

export async function postTravel ( req, res ) {
    const { passengerId, flightId } = req.body;

    await travelService.postTravel( passengerId, flightId );

    return res.sendStatus(201);
}