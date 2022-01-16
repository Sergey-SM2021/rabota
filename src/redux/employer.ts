import { FormType } from "../types"

let defState:Array<FormType> = [
    {
        name: "Сергий",
    surename: "Кузнецов",
    number: "89168518338",
    data: "Начинающий frontend developer",
    skills: ["JavaScript","css&html","react&redux"],
    experience: "есть"
    }
]

const employer = (state = defState,action:any) => {
    return state
}

export default employer