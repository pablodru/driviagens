import { passengersService } from "../services/passengers.service.js";

export async function postPassenger ( req, res ) {
    const { firstName, lastName } = req.body;

    await passengersService.postPassenger(firstName, lastName);

    res.sendStatus(201)
}

export async function getPassengerTravels ( req, res ) {
    const { name } = req.query;

    const travels = await passengersService.getPassengerTravels(name);

    res.send(travels)
}