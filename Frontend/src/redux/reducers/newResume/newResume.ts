import { constants } from "./Constants"
import { actionType } from "./INewResume"

interface IDefaultState {
    loading: boolean,
    errors: string,
    step: number,
}

let defaultState: IDefaultState = {
    loading: false,
    errors: "",
    step: 0,
}

const form = (state = defaultState, action: actionType) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case constants.TOGGALE:
            stateCopy.loading = !stateCopy.loading
            return stateCopy
        case constants.RETURN:
            stateCopy.step --
            return stateCopy
        case constants.NEXT:
            stateCopy.step ++
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