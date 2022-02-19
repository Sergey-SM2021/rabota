import { Resume } from '../../../api/api'
import { Dispatch } from "redux"
import { IResume } from "../../../Models/Models"
import { constants } from './Constants'
import { actionType, IClearState, INext, IReturn, ISetErrors, ISetPersonalDate, ItoggleLoading, PersonalDate } from './INewResume'

export const ClearState = (): IClearState => ({ type: constants.CLEARSTATE })

const setErrors = (errors: string): ISetErrors => ({
    type: constants.SETERRORRS,
    errors
})

const toggleLoading = (): ItoggleLoading => ({
    type: constants.TOGGALE,
})

export const next = (): INext => ({
    type: constants.NEXT
})

export const Return = (): IReturn => ({
    type: constants.RETURN
})

export const SetPersonalDate = (date:PersonalDate): ISetPersonalDate => ({
    payload:date,
    type:constants.SETPERSONALDATE
})

export const SendResume = (data: IResume) => {
    return async (dispatch: Dispatch<actionType>) => {
        dispatch(toggleLoading())
        try {
            await Resume.createResume(data)
            alert("Резюме было создано")
        } catch (error: any) {
            dispatch(setErrors(error))
            alert("Резюме не было создано")
        } finally {
            dispatch(toggleLoading())
        }
    }
}