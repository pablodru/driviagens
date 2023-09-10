function conflict(resource = "Item") {

    return {
        type: "conflict", 
        message: resource==="Origin" ? "Origem e Destino devem ser diferentes" : `${resource} já existe!`
    }
}

function notFound (resource = "Item") {
    return {
        type: "notFound",
        message: `${resource} não encontrado(a)!`
    }
}

function unprocessableEntity ( resource = "Item", err ) {
    return {
        type: "unprocessableEntity",
        message: resource === "Flight" ? "A data do vôo deve ser maior que a data atual" : resource === "Schema" ? err : resource === "Dates" ? "bigger-date e smaller-date devem ser passados juntos" : ""
    }
}

function badRequest ( resource = "Item" ) {
    return {
        type: "badRequest",
        message: resource==="Date" ? `smaller-date deve ser menor que bigger-date` : ""
    }
}


export const errors = { conflict, notFound, unprocessableEntity, badRequest }