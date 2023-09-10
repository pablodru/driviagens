import { db } from "../database/database.connection.js"

async function searchCityDB ( origin, destination ) {
    const query = `
        SELECT id FROM cities WHERE id = $1 OR id = $2;
    `
    return db.query(query, [origin, destination])
}

async function insertFlightDB ( origin, destination, date ) {
    const query = `
        INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);
    `
    return db.query(query, [origin, destination, date]);
}

async function getFlightsDB ( origin, destination, smallerDate, biggerDate ) {
    let query = `
    SELECT  flights.id, 
            "originCities".name AS origin, 
            "destinationCities".name AS destination, 
            TO_CHAR(flights.date, 'DD-MM-YYYY') AS date
                FROM flights
                JOIN cities AS "originCities" ON flights.origin = "originCities".id
                JOIN cities AS "destinationCities" ON flights.destination = "destinationCities".id
    `
    const queryParams = [];

    if ( origin ) {
        query += `WHERE "originCities".name = $1`
        queryParams.push(origin);
    }

    if ( destination ) {
        query += origin ? ` AND "destinationCities".name = $2` : `WHERE "destinationCities".name = $1`;
        queryParams.push(destination);
    }

    if ( smallerDate && biggerDate ) {
        query += ( origin || destination ) ? ` AND flights.date >= $${queryParams.length + 1} AND flights.date <= $${queryParams.length + 2}` : `WHERE flights.date >= $${queryParams.length + 1} AND flights.date <= $${queryParams.length + 2}`
        queryParams.push(smallerDate, biggerDate);
    }

    query += " ORDER BY flights.date;"

    return db.query(query, queryParams);
}

export const flightRepository = {
    searchCityDB,
    insertFlightDB,
    getFlightsDB
}