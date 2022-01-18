import { IForm, IResume } from './../types';

import axios from "axios";

const instace = axios.create({
    baseURL: "http://localhost:8000/"
})

export const createResume = (resume: IForm) => (
    instace.post("resume", resume))

export const getResumes = async () => (
    (await instace.get<Array<IResume>>("resumes")).data
)

export const getResume = async (id: string) => {
    console.log(`resume/${id}`)
    return ((await instace.get<IResume>(`resume/${id}`)).data)
}

