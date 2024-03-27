import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "../counter/counterSlice";
import userSlice from "../user/userSlice";

const rootReducer = combineReducers({
    counter : counterSlice,
    user : userSlice,
});

const store = configureStore({
    reducer:rootReducer,
})

export default store;