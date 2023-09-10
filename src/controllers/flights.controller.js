import { flightService } from "../services/flights.service.js";

export async function postFlight ( req, res ) {
    const { origin, destination, date } = req.body;

    await flightService.postFlight( origin, destination, date );

    return res.sendStatus(201);
}

export async function getFlights ( req, res ) {

}