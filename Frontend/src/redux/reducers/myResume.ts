import { Dispatch } from 'redux';
import { IResume } from '../../types';
import * as axios from '../../api/api'

enum constants {
    SETRESUME = "SETRESUME",
    SWITCHLOAD = "SWITCHLOAD",
}

let initialState: { Resume: IResume, isLoading: Boolean } = {
    Resume: {
        _id: "ghbd9hher78w78wee8932",
        data: "С# developer",
        experience: "есть",
        name: "Арсений",
        number: "+79168518338",
        skills: ["С#", ".Net", "mySQL"],
        surename: "Пискарёв"
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
    resume: IResume,
    type: constants.SETRESUME
}

const setResume = (resume: IResume): IsetResume => ({
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
            dispatch(setResume(Resumes))
        }catch (e) {
            alert(e)
        }
        dispatch(switchLoad())
    }
)


export default Reducer