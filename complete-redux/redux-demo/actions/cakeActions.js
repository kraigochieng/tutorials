export const CAKE_ORDERED = "CAKE_ORDERED"
export const CAKE_RESTOCKED = "CAKE_RESTOCKED"

export function orderCake(quantity = 1) {
    return {
        type: CAKE_ORDERED,
        payload: quantity
    }
}

export function restockCake(quantity = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: quantity
    }
}