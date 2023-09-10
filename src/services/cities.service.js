import { errors } from "../errors/errors.js";
import { cityRepository } from "../repository/cities.repository.js";

async function postCity ( name ) {
    const city = await cityRepository.existingCityDB(name);

    if (city.rowCount > 0) throw errors.conflict("Cidade");

    return await cityRepository.postCityDB(name);
}

export const cityService = { postCity }