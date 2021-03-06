export interface IResume {
        _id: string,
        name: string,
        surename: string,
        number: string,
        skills: Array<string>,
        data: string,
        experience: string
}

export interface IForm {
        name: string,
        surename: string,
        number: string,
        skills: Array<string>,
        data: string,
        experience: string
}

export type INewVacance = Omit<IVacance, "_id">

export interface IVacance {
        _id: string,
        skills: Array<string>,
        vacance: string,
        price: number,
        description: string,
}