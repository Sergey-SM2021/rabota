import { Dispatch } from "redux"
import * as axios from "../api/api"
import { IResume } from "../types"

enum CONSTANTS {
    SETRESUMES = "SETRESUMES",
    SETtotalCountCOUNT = "SETtotalCountCOUNT",
    SWITCHPRELOADER = "SWITCHPRELOADER"
}

interface IIntialState {
    totalCountCount: number,
    resumes: Array<IResume>,
    loading: boolean
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
    loading: false
}

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
    data: Array<IResume>
}

const setResumesAC = (data: Array<IResume>): setResumesType => ({
    type: CONSTANTS.SETRESUMES,
    data
})

interface IswitchPreloader {
    type: CONSTANTS.SWITCHPRELOADER,
}

const switchPreloader = (): IswitchPreloader => ({
    type: CONSTANTS.SWITCHPRELOADER
})

type actionTypes = setResumesType | ISettotalCountCount | IswitchPreloader

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
        default:
            break;
    }
    return state
}

export const getResumesTC = (page: number, count: number) => {
    return async (dispatch: Dispatch<actionTypes>) => {
        dispatch(switchPreloader())
        const { resumes, totalCount } = await axios.Resume.getResumes(page, count)
        dispatch(setResumesAC(resumes))
        dispatch(settotalCountCount(totalCount))
        dispatch(switchPreloader())
    }
}


export default employer