import { Dispatch } from "redux"
import * as axios from "../api/api"
import { IResume } from "../types"

enum CONSTANTS {
    SETRESUMES = "SETRESUMES",
    SETtotalCountCOUNT = "SETtotalCountCOUNT"
}

interface IIntialState {
    totalCountCount: number,
    resumes: Array<IResume>
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
    totalCountCount: 7
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

type actionTypes = setResumesType | ISettotalCountCount

const employer = (state = defState, action: actionTypes) => {
    let statecopy = { ...state}
    switch (action.type) {
        case CONSTANTS.SETRESUMES:
            statecopy.resumes = action.data
            return statecopy
        case CONSTANTS.SETtotalCountCOUNT:
            statecopy.totalCountCount = action.totalCountCount
            return statecopy
        default:
            break;
    }
    return state
}

export const getResumesTC = (page: number, count: number) => {
    return async (dispatch: Dispatch<actionTypes>) => {
        const { resumes, totalCount } = await axios.getResumes(page, count)
        dispatch(setResumesAC(resumes))
        dispatch(settotalCountCount(totalCount))
    }
}


export default employer