import { Dispatch } from "redux";

import * as axios from "../../api/api";
import { IResume } from "../../Models/Models";

enum constants { SETERRORRS = "SETERRORRS", TOGGALE = "TOGGALE", CLEARSTATE = "CLEARSTATE" }

interface IDefaultState{
    loading: boolean,
    errors: string
}

let defaultState : IDefaultState = {
    loading: false,
    errors: ""
}

interface IClearState{
    type: constants.CLEARSTATE
}

export const ClearState = ():IClearState => ({type:constants.CLEARSTATE})

interface ISetErrors{
    type:constants.SETERRORRS,
    errors: string
}

const setErrors =(errors:string):ISetErrors => ({
    type: constants.SETERRORRS,
    errors
})

interface ItoggleLoading {
    type: constants.TOGGALE,
}

const toggleLoading = (): ItoggleLoading => ({
    type: constants.TOGGALE,
})

type actionType = ItoggleLoading | ISetErrors | IClearState

const form = (state = defaultState, action: actionType) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case constants.TOGGALE:
            stateCopy.loading = !stateCopy.loading
            return stateCopy
        case constants.CLEARSTATE:
            stateCopy.errors = ""
            return stateCopy
        case constants.SETERRORRS:
            stateCopy.errors = action.errors
            return stateCopy
        default:
            return stateCopy
    }
}

export const SendResume = (data: IResume) => {
    return async (dispatch: Dispatch<actionType>) => {
        dispatch(toggleLoading())
        try {
            await axios.Resume.createResume(data)
            alert("Резюме было создано")
        } catch (error:any) {
            dispatch(setErrors(error))
            alert("Резюме не было создано")
        }finally {
            dispatch(toggleLoading())
        }
    }
}

export default form