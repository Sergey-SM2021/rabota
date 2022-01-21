import { IForm, IResume } from './../types';

import axios from "axios";

const instace = axios.create({
    baseURL: "http://localhost:8000/resume/"
})

export const createResume = (resume: IForm) => (
    instace.post("create", resume))

export const getResumes = async (page: number, count: number) => {
    return (
        (await instace.get<{ resumes: Array<IResume>, totalCount: number }>(`find?page=${page}&count=${count}`)).data
    )
}

export const getResume = async (id: string) => {
    console.log(`resume/${id}`)
    return ((await instace.get<IResume>(`findById/${id}`)).data)
}

