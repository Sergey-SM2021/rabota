export interface TIResume {
        _id: string,
        name: string,
        surename: string,
        number: string,
        skills: Array<string>,
        data: string,
        experience: string
}

export interface IResume {
        name: string,
        surename: string,
        number: string,
        skills: Array<string>,
        data: string,
        experience: string
}

export type IVacance = Omit<TIVacance, "_id">

// export interface TIVacance {
//         _id: string,
//         skills: Array<string>,
//         vacance: string,
//         price: number,
//         description: string,
// }

export interface TIVacance {
        _id: string,
        title: string,
        price: number,
        skills: Array<string>,
        isDistantWork: boolean
}