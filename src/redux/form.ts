import {Dispatch} from "redux";
import * as axios from "../api/api";
import {FormType} from "../types";

enum constants { SUBMITFORM}

let defaultState = {
    loading:false
}

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

export const SendResume = (data: FormType) => {
    return async (dispatch: Dispatch<actionType>) => {
        await axios.createResume(data)
    }
}

export default form