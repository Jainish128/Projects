import { combineReducers } from "redux";

import userReducer from "../../userReducer";
// import userReducer from "../../../feature/userReducer";

import contactReducer from "../../contactReducer";
// import contactReducer from "../../../feature/contactReducer";



const rootReducer = combineReducers({
    userReducer: userReducer,
    contactReducer: contactReducer
})

export default rootReducer;


