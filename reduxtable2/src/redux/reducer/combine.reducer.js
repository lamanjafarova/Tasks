import {combineReducers } from "redux";
import { universityReducer } from "./university.reducer";
export const rootReducer = combineReducers({
    universityReducer,
})