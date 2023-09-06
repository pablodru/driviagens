import joi from "joi";

export const flightSchema = joi.object({
    origin: joi.number().integer().positive().required(),
    destination: joi.number().integer().positive().required(),
    date: joi.date().format('DD-MM-YYYY').required()
})