import { errors } from "../errors/errors.js";
import { travelsRepository } from "../repository/travels.repository.js"

async function postTravel(passengerId, flightId) {
    const result = await travelsRepository.travelCheck(passengerId, flightId);
    if (result !== 2) {
        throw errors.notFound("passengerId ou flightId");
    }

    await travelsRepository.insertTravel( passengerId, flightId );

    return result;
}


export const travelService = { postTravel }