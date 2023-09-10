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

export const flightRepository = {
    searchCityDB,
    insertFlightDB
}