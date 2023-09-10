import { errors } from "../errors/errors.js";
import { passengersRepository } from "../repository/passengers.repository.js";


async function postPassenger ( firstName, lastName ) {
    return passengersRepository.postPassenger(firstName, lastName);
}

async function getPassengerTravels ( name ) {
    const travels = await passengersRepository.getPassengerTravels( name );

    if (travels.rowCount > 10) throw errors.internalServerError();

    return travels.rows;
}

export const passengersService = { postPassenger, getPassengerTravels };