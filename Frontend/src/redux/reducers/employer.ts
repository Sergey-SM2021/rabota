import { Dispatch } from "redux"

import * as axios from "../../api/api"
import { TIResume } from "../../Models/Models"

enum CONSTANTS {
    SETRESUMES = "SETRESUMES",
    SETtotalCountCOUNT = "SETtotalCountCOUNT",
    SWITCHPRELOADER = "SWITCHPRELOADER",
    SETERRORS = "SETERRORS"
}

interface IIntialState {
    totalCountCount: number,
    resumes: Array<TIResume>,
    loading: boolean,
    errors: string,
}

let defState: IIntialState = {
    resumes: [
        {
            name: "Сергий",
            _id: "678fff",
            surename: "Кузнецов",
            number: "89168518338",
            data: "Начинающий frontend developer",
            skills: ["JavaScript", "css&html", "react&redux"],
            experience: "есть"
        }
    ],
    totalCountCount: 7,
    loading: false,
    errors: "",
}

interface ISetErrors {
    type:CONSTANTS.SETERRORS,
    message:string
}

const setErrors = (message:string):ISetErrors =>
    ({message,type:CONSTANTS.SETERRORS})

interface ISettotalCountCount {
    totalCountCount: number
    type: CONSTANTS.SETtotalCountCOUNT
}

const settotalCountCount = (totalCountCount: number): ISettotalCountCount => ({
    totalCountCount,
    type: CONSTANTS.SETtotalCountCOUNT
})

interface setResumesType {
    type: CONSTANTS.SETRESUMES,
    data: Array<TIResume>
}

const setResumesAC = (data: Array<TIResume>): setResumesType => ({
    type: CONSTANTS.SETRESUMES,
    data
})

interface IswitchPreloader {
    type: CONSTANTS.SWITCHPRELOADER,
}

const switchPreloader = (): IswitchPreloader => ({
    type: CONSTANTS.SWITCHPRELOADER
})

type actionTypes = setResumesType | ISettotalCountCount | IswitchPreloader | ISetErrors

const employer = (state = defState, action: actionTypes) => {
    let statecopy = { ...state }
    switch (action.type) {
        case CONSTANTS.SETRESUMES:
            statecopy.resumes = action.data
            return statecopy
        case CONSTANTS.SETtotalCountCOUNT:
            statecopy.totalCountCount = action.totalCountCount
            return statecopy
        case CONSTANTS.SWITCHPRELOADER:
            statecopy.loading = !statecopy.loading
            return statecopy
        case CONSTANTS.SETERRORS:
            statecopy.errors = action.message
            return  statecopy
        default:
            break;
    }
    return state
}

export const getResumes = (page = 6, count = 1) => {
    return async (dispatch: Dispatch<actionTypes>) => {
        dispatch(switchPreloader())
        try {
            const { resumes, totalCount } = await axios.Resume.getResumes(page, count)
            dispatch(setResumesAC(resumes))
            dispatch(settotalCountCount(totalCount))
        }catch (e:any) {
            dispatch(setErrors(e))
        }finally {
            dispatch(switchPreloader())
        }

    }
}


export default employer