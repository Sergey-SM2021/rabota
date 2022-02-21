import { RootType } from './store'

export const Resumes = {
    getResumes(state: RootType) {
        return (state.employer.resumes)
    },

    gettotalCountCount(state: RootType) {
        return (state.employer.totalCountCount)
    },
    checkLoading(state: RootType) {
        return (state.employer.loading)
    },
    errors(state: RootType) {
        return state.employer.errors
    },
}

export const Resume = {
    getResume(state: RootType) {
        return state.someonesResume.Resume
    },
    isLoading(state: RootType) {
        return state.someonesResume.isLoading
    },
}

export const NewResume = {
    formIsToggle(state: RootType) {
        return state.CreateResume.loading
    },
    errors(state: RootType) {
        return state.CreateResume.errors
    },
    getGitHub(state: RootType) {
        return state.CreateResume.gitHub
    },
    getSkills(state: RootType){
        return state.CreateResume.skills
    },
    getPersonalData(state: RootType) {
        return state.CreateResume.personalDate
    },
}

export const Vacances = {
    errors(state: RootType) {
        return (state.employee.errors)
    },
    getVacances(state: RootType) {
        return (state.employee.vacance)
    },
    isLoading(state: RootType) {
        return state.employee.isLoading
    },
    getTotalCount(state: RootType) {
        return state.employee.maxCount
    },
}

export const Vacance = {
    getVacance(state: RootType) {
        return state.vacance.vacance
    }
}
