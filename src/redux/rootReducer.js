import { combineReducers } from "redux";
import loginReducer from "./loginSlice.js";
import registartionSlice from "./registartionSlice.js";
import cartSlice from "./cartSlice.js";


const routeReducer = combineReducers({

    login: loginReducer,
    registartion: registartionSlice,
    cart: cartSlice
}
);


export default routeReducer;
