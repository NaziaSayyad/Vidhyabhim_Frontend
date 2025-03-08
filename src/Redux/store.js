import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { StudentReducer } from "./Student/reducer";
import { thunk } from "redux-thunk";
import { MarksheetReducer } from "./Marksheet/reducer";


const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const RootReducer = combineReducers({
    student: StudentReducer,
    marksheet : MarksheetReducer
})

export const store = legacy_createStore(RootReducer,createComposer(applyMiddleware(thunk)) );