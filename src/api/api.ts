import axios from "axios";
import { FormType } from '../types'

const instace = axios.create({
    baseURL: "http://localhost:8000/"
})

export const createResume = (resume: FormType) => (
    instace.post("resume", resume))

export const getResumes = async () => (
    (await instace.get<Array<FormType>>("resumes")).data
)

export const getResume = async (id: string) => {
    console.log(`resume/${id}`)
    return ((await instace.get<FormType>(`resume/${id}`)).data)
}

