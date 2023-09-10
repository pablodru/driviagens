import { passengersService } from "../services/passengers.service.js";

export async function postPassenger ( req, res ) {
    const { firstName, lastName } = req.body;

    await passengersService.postPassenger(firstName, lastName);

    res.sendStatus(201)
}

export function getPassengerTravels ( req, res ) {

}