import { Dispatch } from 'redux';
import { skillLavel, TIResume } from '../../Models/Models';
import * as axios from '../../api/api'

enum constants {
    SETRESUME = "SETRESUME",
    SWITCHLOAD = "SWITCHLOAD",
}

let initialState: { Resume: TIResume, isLoading: Boolean } = {
    Resume: {
        _id: "678fff",
        personalDate: {
            country: "Дакка",
            mail: "Indian@gmail.com",
            name: "Сергий",
            surename: "Кузнецов",
            phone: 89168518338,
            sity: "Бангладеш",
        },
        portfolio: ["jkfdkjfdfkjd."],
        skills: {
            description: "Крутой индус",
            experience: "есть",
            profession: "Js dev",
            skillLavel: skillLavel.MIDDLE,
            technologyStack: ["JavaScript", "css&html", "react&redux"],
        }
    },
    isLoading: false
}

interface ISwitchLoader {
    type: constants.SWITCHLOAD
}

const switchLoad = (): ISwitchLoader => ({
    type: constants.SWITCHLOAD
})

interface IsetResume {
    resume: TIResume,
    type: constants.SETRESUME
}

const setResume = (resume: TIResume): IsetResume => ({
    resume: resume,
    type: constants.SETRESUME
})

type actionType = IsetResume | ISwitchLoader

const Reducer = (state = initialState, action: actionType) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case constants.SWITCHLOAD:
            stateCopy.isLoading = !stateCopy.isLoading
            return stateCopy
        case constants.SETRESUME:
            stateCopy.Resume = action.resume
            debugger
            return stateCopy
        default:
            return stateCopy
    }
}

export const getResume = (id: string) => (
    async (dispatch: Dispatch<actionType>) => {
        dispatch(switchLoad())
        try {
            const Resumes = await axios.Resume.getResume(id)
            debugger
            dispatch(setResume(Resumes))
        } catch (e) {
            alert(e)
        }
        dispatch(switchLoad())
    }
)


export default Reducer