import { passengersService } from "../services/passengers.service.js";

export async function postPassenger ( req, res ) {
    const { firstName, lastName } = req.body;

    try {

        await passengersService.postPassenger(firstName, lastName);

        res.sendStatus(201)

    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export function getPassengerTravels ( req, res ) {
    try {

    } catch (err) {
        return res.status(500).send(err.message)
    }
}