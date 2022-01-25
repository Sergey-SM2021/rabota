import { Dispatch } from "redux"
import { Vacance } from "../api/api"
import { IVacance } from "./newVacance"

enum CONSTANTS { SETVACANCE = "SETVACANCE" }

interface IinitialState {
    isLoading: boolean,
    vacance: Array<{
        skills: Array<String>,
        vacance: String,
        price: number,
        description: string
    }>
}

const initialState: IinitialState = {
    isLoading: false,
    vacance: [{
        description: "Ищем форнтенд разработчика с опытом работы от 3 лет",
        price: 120,
        skills: ["Js", "Ts"],
        vacance: "Frontend-Developer"
    }]
}

interface IsetVacance {
    arrOfVacance: Array<IVacance>,
    type: CONSTANTS.SETVACANCE,
}

const setVacance = (arrOfVacance: Array<IVacance>): IsetVacance => ({
    type: CONSTANTS.SETVACANCE,
    arrOfVacance
})

type actionType = IsetVacance

const vacanceReducer = (state = initialState, action: actionType) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case CONSTANTS.SETVACANCE:
            stateCopy.vacance = action.arrOfVacance
            return stateCopy
        default:
            return stateCopy
    }
}

export const getVacance = () => (
    async (dispatch: Dispatch<actionType>) => {
        const vacance = await Vacance.getVacance()
        dispatch(setVacance(vacance))
    }
)

export default vacanceReducer