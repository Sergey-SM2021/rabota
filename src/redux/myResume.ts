import { Dispatch } from 'redux';
import { IResume } from './../types';
import * as axios from '../api/api'

enum constants {
    SETRESUME = "SETRESUME"
}

let initialState: IResume = {
    _id: "ghbd9hher78w78wee8932",
    data: "С# developer",
    experience: "есть",
    name: "Арсений",
    number: "+79168518338",
    skills: ["С#", ".Net", "mySQL"],
    surename: "Пискарёв"
}

interface IsetResume {
    resume: IResume,
    type: constants.SETRESUME
}

const setResume = (resume: IResume): IsetResume => ({
    resume: resume,
    type: constants.SETRESUME
})

type actionType = IsetResume

const Reducer = (state = initialState, action: actionType) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case constants.SETRESUME:
            stateCopy = action.resume
            return stateCopy
        default:
            return stateCopy
    }
}

export const getResume = (id: string) => (
    async (dispatch: Dispatch<actionType>) => {
        const Resumes = await axios.getResume(id)
        dispatch(setResume(Resumes))
    }
)


export default Reducer