import { IForm, INewVacance, IResume, IVacance } from './../types'

import axios from "axios";

const instace = axios.create({
    baseURL: "http://localhost:8000/"
})

export const Resume = {
    async createResume(resume: IForm) {
        try {
            await instace.post("resume/create", resume)
        } catch (error) {
            throw "Не удалось создать резюме"
        }
    },
    async getResumes(page: number, count: number) {
        try {
            return((await instace.get<{ resumes: Array<IResume>, totalCount: number }>(`resume/find?page=${page}&count=${count}`)).data)
        }
        catch (e) {
            throw  "Не удалось загрузить резюме"
        }
    },
    async getResume(id: string) {
        try {
            return ((await instace.get<IResume>(`resume/findById/${id}`)).data)
        }
        catch (e) {
            throw "Не удалось загрузить резюме"
        }
    }
}

export const Vacance = {
    async createVacance(vacance: INewVacance) {
        try {
            await instace.post("/vacance/create", vacance)
        }catch (e) {
            throw "Не получилось создать вакансию"
        }
    },
    async getVacance(page: number, pageSize: number) {
        try {
            return (await (await instace.get<{vacanses:Array<IVacance>,totalCount:number}>(`/vacance?page=${page}&pageSize=${pageSize}`)).data)
        }
        catch (e) {
            throw "Не удалось получиить вакансии"
        }
    }
}