import { vacance } from './reducers/vacance';
import { applyMiddleware, combineReducers, createStore } from "redux";
import employee from './reducers/employee'
import employer from './reducers/employer'
import thunk from 'redux-thunk'
import CreateResume from './reducers/newResume'
import someonesResume from './reducers/myResume'
import CreateVacance from './reducers/newVacance'

const reducers = combineReducers({
    employee,
    employer,
    CreateResume,
    someonesResume,
    CreateVacance,
    vacance
})

let store = createStore(reducers, applyMiddleware(thunk))

export type RootType = ReturnType<typeof reducers>

export default store