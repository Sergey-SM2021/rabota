import { RootType } from './store';

export const getResumes = (state: RootType) => (
    state.employer
)

export const getResume = (state: RootType) => (
    state.myResume
)

export const formIsToggle = (state: RootType) => (
    state.form.loading
)