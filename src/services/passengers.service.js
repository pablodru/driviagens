import { passengersRepository } from "../repository/passengers.repository.js";


function postPassenger ( firstName, lastName ) {
    return passengersRepository.postPassenger(firstName, lastName);
}

export const passengersService = { postPassenger };