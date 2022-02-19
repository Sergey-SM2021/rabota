import { constants } from "./Constants"
import { actionType, IDefaultState } from "./INewResume"

let defaultState: IDefaultState = {
    loading: false,
    errors: "",
    personalDate: {
        name: "",
        phone: "",
        surename: ""
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