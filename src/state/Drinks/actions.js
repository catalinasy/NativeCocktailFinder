import {SET_FETCHING, SET_DRINKS, CLEAR_DRINKS} from "./constants"

export function setFetching() {
    return {
        type: SET_FETCHING,
        payload: true
    }
}

export function setDrinks(drinks) {
    return {
        type: SET_DRINKS,
        payload: drinks
    }
}

export function clearDrinks() {
    return {
        type: CLEAR_DRINKS
    }
}


