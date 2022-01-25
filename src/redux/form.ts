import { Dispatch } from "redux";

import * as axios from "../api/api";
import { IForm } from "../types";

enum constants { SUBMITFORM = "SUBMITFORM", TOGGALE = "TOGGALE" }

let defaultState = {
    loading: false
}

interface ItoggleLoading {
    type: constants.TOGGALE,
}

const toggleLoading = (): ItoggleLoading => ({
    type: constants.TOGGALE,
})

type actionType = ItoggleLoading

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
        await axios.Resume.createResume(data)
        setTimeout(() => {
            dispatch(toggleLoading())
            alert("Резюме было созданно")
        }, 5000)
    }
}

export default form