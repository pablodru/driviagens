import joi from "joi";

export const flightSchema = joi.object({
    origin: joi.number().integer().positive().required(),
    destination: joi.number().integer().positive().required(),
    date: joi.string().pattern(new RegExp(/^\d{2}-\d{2}-\d{4}$/))
        .custom((value, helpers) => {
            const [day, month, year] = value.split('-').map(Number);
    
            if (day <= 31 && month <= 12) {
            return value; // Data válida
            } else {
            return helpers.error('any.invalid'); // Data inválida
            }
        }, 'custom validation').required()
})