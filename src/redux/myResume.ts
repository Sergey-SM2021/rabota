import { FormType } from './../types';

let initialState: FormType = {
    _id: "ghbd9hher78w78wee8932",
    data: "Php developer",
    experience: "есть",
    name: "Алеуксандр",
    number: "+79168518338",
    skills: ["Java", "Php", "mySQL"],
    surename: "Ткачёв"
}

const Reducer = (state = initialState, action: any) => {
    return {...state}
}

export default Reducer