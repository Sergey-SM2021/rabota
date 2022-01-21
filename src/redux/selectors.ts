import { RootType } from './store';

export const getResumes = (state: RootType) => {
    return (
        state.employer.resumes
    )
}

export const getResume = (state: RootType) => (
    state.myResume
)

export const formIsToggle = (state: RootType) => (
    state.form.loading
)

export const gettotalCountCount = (state: RootType) => (
    state.employer.totalCountCount
)
