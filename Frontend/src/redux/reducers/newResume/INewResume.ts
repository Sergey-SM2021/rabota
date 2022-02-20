import { skillLavelType } from "../../../Models/Models";
import { constants } from "./Constants";

export interface IDefaultState {
    loading: boolean,
    errors: string,
    personalDate: IPersonalDate
    skills: ISkills
}

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

export type actionType = ItoggleLoading | ISetErrors | IClearState | INext | IReturn | ISetPersonalDate

export interface IPersonalDate {
    name: string,
    phone: number,
    surename: string
    mail: string,
    sity: string,
    country: string
}

export interface ISkills {
    description: string,
    profession: string,
    skillLavel: skillLavelType,
    technologyStack: Array<string>,
    experience: string
}

// #FIXME:IDefaultState mast be in models

export interface ISetPersonalDate {
    type: constants.SETPERSONALDATE,
    payload: IPersonalDate
}