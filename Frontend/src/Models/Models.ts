export enum skillLavel {
        JUNIOR = "JUNIOR",
        MIDDLE = "MIDDLE",
        SENIOR = "SENIOR",
        TEAMLEAD = "TEAMLEAD"
}

type skillLavelType = skillLavel

export interface TIResume {
        _id: string,
        name: string,
        surename: string,
        number: string,
        skills: Array<string>,
        experience: string,

        profession: string,
        description: string,
        skillLavel: skillLavelType,
        gmail: string,
        sity: string,
        country: string
}

export interface IResume {
        name: string,
        surename: string,
        number: string,
        skills: Array<string>,
        experience: string,

        profession: string,
        description: string,
        skillLavel: skillLavelType,
        gmail: string,
        sity: string,
        country: string
}

export type IVacance = Omit<TIVacance, "_id">

export interface TIVacance {
        _id: string,
        title: string,
        price: number,
        skills: Array<string>,
        isDistantWork: boolean,
        phone: number,
        description: string
}