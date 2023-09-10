import { db } from "../database/database.connection.js"

function postPassenger ( firstName, lastName ) {
    const query = 'INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)'
    return db.query(query, [ firstName, lastName ])
}

function getPassengerTravels ( name ) {
    let query = `
        SELECT CONCAT(passengers."firstName", ' ', passengers."lastName") AS passenger, COUNT(travels.id) AS travels FROM passengers
            JOIN travels ON passengers.id = travels."passengerId"
    `

    const queryParams = []

    if ( name ) {
        query += `WHERE CONCAT(passengers."firstName", ' ', passengers."lastName") ILIKE '%' || $1 || '%'`;
        queryParams.push(name);
    }
    query += " GROUP BY passenger ORDER BY travels DESC"

    return db.query(query, queryParams);
}

export const passengersRepository = { postPassenger, getPassengerTravels };