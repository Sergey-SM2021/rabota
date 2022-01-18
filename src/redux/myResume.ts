import { FormType } from './../types';

enum constants {
    SETRESUME = "SETRESUME"
}

let initialState: FormType = {
    _id: "ghbd9hher78w78wee8932",
    data: "С# developer",
    experience: "есть",
    name: "Арсений",
    number: "+79168518338",
    skills: ["С#", ".Net", "mySQL"],
    surename: "Пискарёв"
}

interface IsetResume {
    resume: FormType,
    type: constants.SETRESUME
}

export const setResume = (resume: FormType): IsetResume => ({
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

export default Reducer