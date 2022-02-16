import { IResume, IVacance, TIResume, TIVacance } from '../Models/Models'

import axios from "axios";

const instace = axios.create({
    baseURL: "http://localhost:8000/"
})

export const Resume = {
    async createResume(resume: IResume) {
        try {
            await instace.post("resume/create", resume)
        } catch (error) {
            throw "Не удалось создать резюме"
        }
    },
    async getResumes(page: number, count: number) {
        try {
            return((await instace.get<{ resumes: Array<TIResume>, totalCount: number }>(`resume/find?page=${page}&count=${count}`)).data)
        }
        catch (e) {
            throw  "Не удалось загрузить резюме"
        }
    },
    async getResume(id: string) {
        try {
            return ((await instace.get<TIResume>(`resume/findById/${id}`)).data)
        }
        catch (e) {
            throw "Не удалось загрузить резюме"
        }
    }
}

export const Vacance = {
    async createVacance(vacance: IVacance) {
        try {
            await instace.post("/vacance/create", vacance)
        }catch (e) {
            throw "Не получилось создать вакансию"
        }
    },
    async getVacance(page: number, pageSize: number) {
        try {
            return (await (await instace.get<{vacanses:Array<TIVacance>,totalCount:number}>(`/vacance?page=${page}&pageSize=${pageSize}`)).data)
        }
        catch (e) {
            throw "Не удалось получиить вакансии"
        }
    }
}