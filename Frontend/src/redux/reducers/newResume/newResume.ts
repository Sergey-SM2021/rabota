import { INewResume, skillLavel } from './../../../Models/Models'
import { constants } from "./Constants"
import { actionType } from "./INewResume"

let defaultState: INewResume = {
    loading: false,
    errors: "",
    personalDate: {
        name: "111",
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
    },
    gitHub: ""
}

const form = (state = defaultState, action: actionType) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case constants.TOGGALE:
            stateCopy.loading = !stateCopy.loading
            return stateCopy
        case constants.SKILLS:
            stateCopy.skills = action.payload
            return stateCopy
        case constants.SETPERSONALDATE:
            stateCopy.personalDate = action.payload
            return stateCopy
        case constants.CLEARSTATE:
            stateCopy.gitHub = defaultState.gitHub
            stateCopy.personalDate = defaultState.personalDate
            stateCopy.skills = defaultState.skills
            // FIXME:state mast can clianing
            console.log("🚀 ~ file: newResume.ts ~ line 40 ~ form ~ stateCopy", stateCopy)
            return stateCopy
        case constants.SETERRORRS:
            stateCopy.errors = action.errors
            return stateCopy
        case constants.SETGITHUB:
            stateCopy.gitHub = action.payload
            return stateCopy
        default:
            return stateCopy
    }
}

export default form