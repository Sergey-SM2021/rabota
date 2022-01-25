import { IForm, IResume } from './../types';

import axios from "axios";
import { IVacance } from '../redux/newVacance';

const instace = axios.create({
    baseURL: "http://localhost:8000/"
})

export const Resume = {
    createResume(resume: IForm) {
        instace.post("resume/create", resume)
    },
    async getResumes(page: number, count: number) {
        return (
            (await instace.get<{ resumes: Array<IResume>, totalCount: number }>(`resume/find?page=${page}&count=${count}`)).data
        )
    },
    async getResume(id: string) {
        return ((await instace.get<IResume>(`resume/findById/${id}`)).data)
    }
}

// export const createResume = (resume: IForm) => (
//     instace.post("resume/create", resume))

// export const getResumes = async (page: number, count: number) => {
//     return (
//         (await instace.get<{ resumes: Array<IResume>, totalCount: number }>(`resume/find?page=${page}&count=${count}`)).data
//     )
// }

// export const getResume = async (id: string) => {
//     console.log(`resume/${id}`)
//     return ((await instace.get<IResume>(`resume/findById/${id}`)).data)
// }

export const Vacance = {
    async createVacance(vacance: IVacance) {
        instace.post("/vacance", vacance)
    },
    async getVacance() {
        return(await(await instace.get<Array<IVacance>>("/vacance")).data)
    }
}

