import { errors } from "../errors/errors.js";

export function validateSchema (schema) {
    
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false });
    
        if( validation.error ){
            const err = validation.error.details.map(detail => detail.message);
            throw errors.unprocessableEntity("Schema", err)
        }

        next();
    }
}

export function validateSchemaQuery (schema) {
    
    return (req, res, next) => {
        const validation = schema.validate(req.query, { abortEarly: false });
    
        if( validation.error ){
            const err = validation.error.details.map(detail => detail.message);
            throw errors.unprocessableEntity("Schema", err)
        }

        next();
    }
}