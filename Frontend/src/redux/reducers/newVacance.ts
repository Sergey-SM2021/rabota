import { Dispatch } from 'redux'

import { Vacance } from '../../api/api'
import { IVacance  } from '../../Models/Models'

const initialState = {
    isLoading: false
}

type actionType = any

const vacanceReducer = (state = initialState, action: actionType) => {
    let stateCopy = { ...state }
    return stateCopy
}

export const vacanceSubmit = (vacance: IVacance) => (
    async (dispatch: Dispatch<actionType>) => {
        try {
            await Vacance.createVacance(vacance)
        } catch (e) {
            alert(e)
        }
    }
)

export default vacanceReducer