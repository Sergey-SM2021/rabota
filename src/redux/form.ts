import { Dispatch } from "redux";
import * as axios from "../api/api";
import { IForm } from "../types";

enum constants { SUBMITFORM = "SUBMITFORM", TOGGALE = "TOGGALE" }

let defaultState = {
    loading: true
}

interface SUBMITFORMACTYPE {
    type: constants.SUBMITFORM,
    data: IForm
}

interface ItoggleLoading {
    type: constants.TOGGALE,
}

const toggleLoading = (): ItoggleLoading => ({
    type: constants.TOGGALE,
})

type actionType = SUBMITFORMACTYPE | ItoggleLoading

const form = (state = defaultState, action: actionType) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case constants.TOGGALE:
            stateCopy.loading = !stateCopy.loading
            return stateCopy
        default:
            return stateCopy
    }
}

export const SendResume = (data: IForm) => {
    return async (dispatch: Dispatch<actionType>) => {
        dispatch(toggleLoading())
        await axios.createResume(data)
        setTimeout(() => {
            dispatch(toggleLoading())
        }, 5000)
    }
}

export default form