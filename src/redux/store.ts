import { applyMiddleware, combineReducers, createStore } from "redux";
import employee from './employee'
import employer from './employer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    employee,
    employer
})

let store = createStore(reducers,applyMiddleware(thunk))

export type RootType = ReturnType<typeof reducers>
export default store