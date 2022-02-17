import { Dispatch } from "redux"
import { IVacance } from "../../Models/Models"

enum constants {
    SETVACANC = "SETVACANC"
}

type stateType = {
    vacance: IVacance
}

const StateInit: stateType = {
    vacance: {
        price: 800,
        skills: ["ts"],
        description: "description",
        vacance: ""
    }
}

interface ISetVacance {
    type: constants.SETVACANC
    payload: IVacance
}

const SetVacance = (payload:IVacance):ISetVacance => ({
    payload,
    type:constants.SETVACANC
})

type actionType = ISetVacance

export const vacance = (state = StateInit, action: actionType) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case constants.SETVACANC:
            stateCopy.vacance = action.payload
            return stateCopy
        default:
            return stateCopy
    }
}

export const setVacance = (vacance: IVacance) => (dispatch: Dispatch) => {
    dispatch(SetVacance(vacance))
}