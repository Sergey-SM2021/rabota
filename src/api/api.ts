import axios from "axios";
import {FormType} from '../types'

const instace = axios.create({
    baseURL: "http://localhost:8000/"
})

export const createResume = (resume:FormType) => {
    return instace.post("resume",resume)
}
