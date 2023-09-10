import { db } from "../database/database.connection.js"

async function travelCheck ( passengerId, flightId ) {
    const query = `
        SELECT id FROM passengers WHERE id = $1
        UNION
        SELECT id FROM flights WHERE id = $2
    `
    const result = await db.query(query, [ passengerId, flightId ]);
    return result.rowCount;
}

async function insertTravel ( passengerId, flightId ) {
    const query = `
        INSERT INTO travels ( "passengerId", "flightId" ) VALUES ( $1, $2 ); 
    `
    return db.query(query, [ passengerId, flightId ]);
}

export const travelsRepository = { travelCheck, insertTravel };