export const ICECREAM_ORDERED = "ICECREAM_ORDERED"
export const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED"

export function orderIceCream(quantity = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: quantity
    }
}

export function restockIceCream(quantity = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: quantity
    }
}