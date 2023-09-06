export function conflict(resource = "Item") {
    return {
        type: "conflict", 
        message: `${resource} já existe!`
    }
}


export const errors = { conflict }