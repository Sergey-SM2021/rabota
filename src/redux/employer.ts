import { Dispatch } from "redux"
import { getResumesByAPI } from "../api/api"
import { FormType } from "../types"

enum CONSTANTS { "SETRESUMES" }

let defState: Array<FormType> = [
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
    data:Array<FormType>
}

const setResumesAC = (data: Array<FormType>): setResumesType => ({
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

export const getResumesTC = () => {
    return async (dispatch: Dispatch<actionTypes>) => {
        const Resumes = await getResumesByAPI()
        dispatch(setResumesAC(Resumes))
    }
}


export default employer