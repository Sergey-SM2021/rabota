import { applyMiddleware, combineReducers, createStore } from "redux";
import employee from './reducers/employee'
import employer from './reducers/employer'
import thunk from 'redux-thunk'
import form from './reducers/newResume'
import myResume from './reducers/myResume'
import vacance from './reducers/newVacance'

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