import dayjs from "dayjs";
import { errors } from "../errors/errors.js";
import { flightRepository } from "../repository/flights.repository.js";

function parseDate(dateStr) {
    const [day, month, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

async function timeDiff(date) {
    const today = new Date();
    const dateFormat = date.split("-");
    const formattedDate = new Date(`${dateFormat[2]}-${dateFormat[1]}-${dateFormat[0]}`);
    return formattedDate - today;
}

async function diffDates (smaller, bigger) {
    const formattedSmaller = parseDate(smaller);
    const formattedBigger = parseDate(bigger);

    return formattedBigger > formattedSmaller;
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

async function getFlights ( origin, destination, smallerDate, biggerDate ) {

    if ((smallerDate && !biggerDate) || (!smallerDate && biggerDate)) throw errors.unprocessableEntity("Dates");

    if ( smallerDate && biggerDate ){
        if ( !await diffDates(smallerDate, biggerDate) ) throw errors.badRequest("Date");
    }

    const flights = await flightRepository.getFlightsDB( origin, destination, smallerDate, biggerDate );

    return flights.rows;

}

export const flightService = {
    postFlight, getFlights
}