import { combineReducers } from "redux";
import titleReducer from "./TitleReducer";

const rootReducer = combineReducers({
    title: titleReducer,
})

export default rootReducer;