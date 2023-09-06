import { db } from "../database/database.connection.js"

async function existingCityDB ( name ) {
    const query = `
        SELECT name FROM cities WHERE name=$1;
    `
    return db.query(query, [name]);
}

async function postCityDB ( name ) {
    const query = `
        INSERT INTO cities (name) VALUES ($1);
    `
    return db.query(query, [name]);
}

export const cityRepository = { 
    postCityDB,
    existingCityDB
};