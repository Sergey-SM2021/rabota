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
    errors(state: RootType){
        return state.employer.errors
    },
}

export const Resume = {
    getResume(state: RootType) {
        return state.myResume.Resume
    },
    isLoading(state: RootType) {
        return state.myResume.isLoading
    },
}

export const Form = {
    formIsToggle(state: RootType) {
        return state.form.loading
    },
    errors(state: RootType){
        return state.form.errors
    }
}

export const Vacance = {
    errors(state: RootType){
        return (state.employee.errors)
    },
    getVacance(state: RootType) {
        return (state.employee.vacance)
    },
    isLoading(state: RootType) {
        return state.employee.isLoading
    },
    getTotalCount(state: RootType){
        return state.employee.maxCount
    },
}
