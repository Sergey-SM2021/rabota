import { Dispatch } from "redux"
import { Vacance } from "../api/api"
import { IVacance } from "../types"

enum CONSTANTS {
    SETVACANCE = "SETVACANCE",
    SWITCH = "SWITCH"
}

interface IinitialState {
    isLoading: boolean,
    vacance: Array<IVacance>,
    maxCount:number
}

const initialState: IinitialState = {
    isLoading: false,
    vacance: [{
        description: "Ищем форнтенд разработчика с опытом работы от 3 лет",
        price: 120,
        skills: ["Js", "Ts"],
        vacance: "Frontend-Developer",
        _id:"klsdklfkl77hhb43h4jh4hjh5njn"
    }],
    maxCount: 20
}

interface switchLoader {
    type: CONSTANTS.SWITCH
}

const switchLoader = (): switchLoader => ({
    type: CONSTANTS.SWITCH
})

interface IsetVacance {
    arrOfVacance: Array<IVacance>,
    type: CONSTANTS.SETVACANCE,
}

const setVacance = (arrOfVacance: Array<IVacance>): IsetVacance => ({
    type: CONSTANTS.SETVACANCE,
    arrOfVacance
})

type actionType = IsetVacance | switchLoader

const vacanceReducer = (state = initialState, action: actionType) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case CONSTANTS.SWITCH:
            stateCopy.isLoading = !stateCopy.isLoading
            return stateCopy
        case CONSTANTS.SETVACANCE:
            stateCopy.vacance = action.arrOfVacance
            return stateCopy
        default:
            return stateCopy
    }
}

export const getVacance = () => (
    async (dispatch: Dispatch<actionType>) => {
        dispatch(switchLoader())
        const vacance = await Vacance.getVacance()
        dispatch(setVacance(vacance))
        dispatch(switchLoader())
    }
)

export default vacanceReducer