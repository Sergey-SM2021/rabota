import { INewResume, skillLavel } from './../../../Models/Models'
import { constants } from "./Constants"
import { actionType } from "./INewResume"

let defaultState: INewResume = {
    loading: false,
    errors: "",
    personalDate: {
        name: "",
        phone: 8,
        surename: "",
        country: "",
        mail: "",
        sity: ""
    },
    skills: {
        description: "",
        profession: "",
        skillLavel: skillLavel.JUNIOR,
        technologyStack: [""],
        experience: ""
    }
}

const form = (state = defaultState, action: actionType) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case constants.TOGGALE:
            stateCopy.loading = !stateCopy.loading
            return stateCopy
        case constants.SETPERSONALDATE:
            stateCopy.personalDate = action.payload
            return stateCopy
        case constants.CLEARSTATE:
            stateCopy.errors = ""
            return stateCopy
        case constants.SETERRORRS:
            stateCopy.errors = action.errors
            return stateCopy
        default:
            return stateCopy
    }
}

export default form