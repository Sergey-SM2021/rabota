import { Dispatch } from 'redux';
import { skillLavel, TIResume } from '../../Models/Models';
import * as axios from '../../api/api'

enum constants {
    SETRESUME = "SETRESUME",
    SWITCHLOAD = "SWITCHLOAD",
}

let initialState: { Resume: TIResume, isLoading: Boolean } = {
    Resume: {
        _id: "ghbd9hher78w78wee8932",
        country: "Россия",
        description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
        experience: "есть",
        gmail:"seniaPisca@gmail.com",
        profession:".Net developer",
        sity:"Москва",
        skillLavel:skillLavel.SENIOR,
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
        } catch (e) {
            alert(e)
        }
        dispatch(switchLoad())
    }
)


export default Reducer