import { Dispatch } from "redux"
import * as axios from "../api/api"
import { IResume } from "../types"

enum CONSTANTS { "SETRESUMES" }

let defState: Array<IResume> = [
    {
        name: "Сергий",
        _id:"678fff",
        surename: "Кузнецов",
        number: "89168518338",
        data: "Начинающий frontend developer",
        skills: ["JavaScript", "css&html", "react&redux"],
        experience: "есть"
    }
]

interface setResumesType {
    type: CONSTANTS.SETRESUMES,
    data:Array<IResume>
}

const setResumesAC = (data: Array<IResume>): setResumesType => ({
    type: CONSTANTS.SETRESUMES,
    data
})

type actionTypes = setResumesType

const employer = (state = defState, action: actionTypes) => {
    let statecopy = [...defState]
    switch (action.type) {
        case CONSTANTS.SETRESUMES:
            statecopy = action.data
            return statecopy
        default:
            break;
    }
    return state
}

export const getResumesTC = (page:number,count:number) => {
    return async (dispatch: Dispatch<actionTypes>) => {
        const Resumes = await axios.getResumes(page,count)
        dispatch(setResumesAC(Resumes))
    }
}


export default employer