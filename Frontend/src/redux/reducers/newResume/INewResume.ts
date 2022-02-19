import { constants } from "./Constants";

export interface ISetErrors {
    type: constants.SETERRORRS,
    errors: string
}

export interface ItoggleLoading {
    type: constants.TOGGALE,
}

export interface INext {
    type: constants.NEXT
}

export interface IReturn {
    type: constants.RETURN
}

export interface IClearState {
    type: constants.CLEARSTATE
}

export type actionType = ItoggleLoading | ISetErrors | IClearState | INext | IReturn