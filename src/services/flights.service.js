import dayjs from "dayjs";
import { errors } from "../errors/errors.js";
import { flightRepository } from "../repository/flights.repository.js";

async function timeDiff(date) {
    const today = new Date();
    const dateFormat = date.split("-");
    const formattedDate = new Date(`${dateFormat[2]}-${dateFormat[1]}-${dateFormat[0]}`);
    return formattedDate - today;
}

async function postFlight (origin, destination, date) {

    if ( origin === destination ) throw errors.conflict("Origin");

    const timeDifference = await timeDiff(date);
    if ( timeDifference <= 0 ) throw errors.unprocessableEntity("Flight");

    const cityCheck = await flightRepository.searchCityDB(origin, destination);
    if (cityCheck.rowCount !== 2) {
        throw errors.notFound("Origem/Destino");
    }

    return await flightRepository.insertFlightDB(origin, destination, date);
}

export const flightService = {
    postFlight
}