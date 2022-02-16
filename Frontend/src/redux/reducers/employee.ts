import { Dispatch } from "redux"
import { Vacance } from "../../api/api"
import { TIVacance } from "../../Models/Models"

enum CONSTANTS {
    SETVACANCE = "SETVACANCE",
    SWITCH = "SWITCH",
    SETTOTALCOUNT = "SETTOTALCOUNT",
    SETERRORS = "SETERRORS"
}

interface IinitialState {
    isLoading: boolean,
    vacance: Array<TIVacance>,
    maxCount: number,
    errors: string
}

const initialState: IinitialState = {
    isLoading: false,
    vacance: [{
        description: "Ищем форнтенд разработчика с опытом работы от 3 лет",
        price: 120,
        skills: ["Js", "Ts"],
        vacance: "Frontend-Developer",
        _id: "klsdklfkl77hhb43h4jh4hjh5njn"
    }],
    maxCount: 20,
    errors: ""
}

interface ISetErrors {
    type: CONSTANTS.SETERRORS,
    errors: string
}

const SetErrors = (errors:string):ISetErrors => ({
    type: CONSTANTS.SETERRORS,
    errors
})

interface switchLoader {
    type: CONSTANTS.SWITCH
}

const switchLoader = (): switchLoader => ({
    type: CONSTANTS.SWITCH
})

interface IsetTotalCount {
    type: CONSTANTS.SETTOTALCOUNT,
    totalCount: number
}

const setTotleCount = (totalCount: number): IsetTotalCount => ({
    type: CONSTANTS.SETTOTALCOUNT,
    totalCount
})

interface IsetVacance {
    arrOfVacance: Array<TIVacance>,
    type: CONSTANTS.SETVACANCE,
}

const setVacance = (arrOfVacance: Array<TIVacance>): IsetVacance => {
    return ({
        type: CONSTANTS.SETVACANCE,
        arrOfVacance
    })
}

type actionType = IsetVacance | switchLoader | IsetTotalCount | ISetErrors

const vacanceReducer = (state = initialState, action: actionType) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case CONSTANTS.SETTOTALCOUNT:
            stateCopy.maxCount = action.totalCount
            return stateCopy
        case CONSTANTS.SWITCH:
            stateCopy.isLoading = !stateCopy.isLoading
            return stateCopy
        case CONSTANTS.SETVACANCE:
            stateCopy.vacance = action.arrOfVacance
            return stateCopy
        case CONSTANTS.SETERRORS:
            stateCopy.errors = action.errors
            return stateCopy
        default:
            return stateCopy
    }
}

export const getVacance = (page: number = 1, pageSize: number = 2) => (
    async (dispatch: Dispatch<actionType>) => {
        dispatch(switchLoader())
        try {
            const vacanceObj = await Vacance.getVacance(page, pageSize)
            dispatch(setTotleCount(vacanceObj.totalCount))
            dispatch(setVacance(vacanceObj.vacanses))
        }catch (e:any) {
            dispatch(SetErrors(e))
        }
        dispatch(switchLoader())
    }
)

export default vacanceReducer