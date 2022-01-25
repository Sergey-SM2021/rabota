import { Dispatch } from 'redux';
import { Vacance } from '../api/api';
enum CONSTANTS {
    SENDVACANCE = "SENDVACANCE"
}

const initialState = {
    isLoading: false
}

export interface IVacance {
    skills: Array<string>,
    vacance: string,
    price: number,
    description: string
}

interface ISendVacance {
    type: CONSTANTS.SENDVACANCE,
    vacance: IVacance
}

const SendVacance = (vacance: IVacance): ISendVacance => ({
    type: CONSTANTS.SENDVACANCE, vacance
})

type actionType = ISendVacance

const vacanceReducer = (state = initialState, action: actionType) => {
    let stateCopy = { ...state }
    return stateCopy
}

export const vacanceSubmit = (vacance: IVacance) => (
    async (dispatch: Dispatch<actionType>) => {
        await Vacance.createVacance(vacance)
    }
)

export default vacanceReducer