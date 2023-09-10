import { flightService } from "../services/flights.service.js";

export async function postFlight ( req, res ) {
    const { origin, destination, date } = req.body;

    await flightService.postFlight( origin, destination, date );

    return res.sendStatus(201);
}

export async function getFlights ( req, res ) {
    const { origin, destination } = req.query;
    const smallerDate = req.query["smaller-date"];
    const biggerDate = req.query["bigger-date"];

    const flights = await flightService.getFlights( origin, destination, smallerDate, biggerDate );

    return res.status(200).send(flights);
}