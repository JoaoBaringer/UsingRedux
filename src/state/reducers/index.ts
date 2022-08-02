import { combineReducers } from "redux";
import bankreducer from "./backReducer"

const reducers = combineReducers({
    bank: bankreducer
});

export default reducers

export type State = ReturnType<typeof reducers>