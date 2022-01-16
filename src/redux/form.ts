import {Dispatch} from "redux";
import {FormType} from "../types";

enum constants { SUBMITFORM}

let defaultState = {}

interface SUBMITFORMACTYPE {
    type: constants.SUBMITFORM,
    data: FormType
}

export const SUBMITFORMAC = (data: FormType):SUBMITFORMACTYPE => ({
    type: constants.SUBMITFORM,
    data
})

type actionType = SUBMITFORMACTYPE

const form = (state = defaultState, action: actionType) => {
    let stateCopy = {...state}
    switch (action.type) {
        case constants.SUBMITFORM:
            console.log("Пока вё работае")
            return stateCopy
        default:
            return stateCopy
    }
}

export const ThunkAC = (data: FormType) => {
    return async (dispatch: Dispatch<actionType>) => {
        dispatch(SUBMITFORMAC(data))
    }
}

export default form