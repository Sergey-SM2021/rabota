import axios from "axios";
import { FormType } from '../types'

const instace = axios.create({
    baseURL: "http://localhost:8000/"
})

export const createResume = (resume: FormType) => (
    instace.post("resume", resume))

export const getResumesByAPI = async () => (
    (await instace.get<Array<FormType>>("resume")).data
)
