import { IForm, INewVacance, IResume, IVacance } from './../types'

import axios from "axios";

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

export const Vacance = {
    async createVacance(vacance: INewVacance) {
        instace.post("/vacance", vacance)
    },
    async getVacance() {
        return (await (await instace.get<Array<IVacance>>("/vacance")).data)
    }
}

