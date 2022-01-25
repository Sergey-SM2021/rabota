import { RootType } from './store'

export const ResumesApi = {
    getResumes(state: RootType) {
        return (state.employer.resumes)
    },

    gettotalCountCount(state: RootType) {
        return (state.employer.totalCountCount)
    },
    checkLoading(state: RootType) {
        return (state.employer.loading)
    },
}

export const ResumeApi = {
    getResume(state: RootType) {
        return state.myResume.Resume
    },
    isLoading(state: RootType) {
        return state.myResume.isLoading
    }
}

export const formApi = {
    formIsToggle(state: RootType) {
        return state.form.loading
    },
}

export const VacanceApi = {
    getVacance(state: RootType) {
        return (state.employee.vacance)
    },
    isLoading(state: RootType){
        return state.employee.isLoading
    }
}
