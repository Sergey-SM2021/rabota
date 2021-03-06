import { applyMiddleware, combineReducers, createStore } from "redux";
import employee from './employee'
import employer from './employer'
import thunk from 'redux-thunk'
import form from './newResume'
import myResume from './myResume'
import vacance from './newVacance'

const reducers = combineReducers({
    employee,
    employer,
    form,
    myResume,
    vacance
})

let store = createStore(reducers,applyMiddleware(thunk))

export type RootType = ReturnType<typeof reducers>
export default store