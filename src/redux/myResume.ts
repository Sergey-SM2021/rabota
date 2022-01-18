import { FormType } from './../types';

enum constants {
    SETRESUME
}

let initialState: FormType = {
    _id: "ghbd9hher78w78wee8932",
    data: "Php developer",
    experience: "есть",
    name: "Александр",
    number: "+79168518338",
    skills: ["Java", "Php", "mySQL"],
    surename: "Ткачёв"
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
            return stateCopy
        default:
            return stateCopy
    }
}

export default Reducer