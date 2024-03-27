import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:"",
    age:"",
}


const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        changeName : (state,action)=>{state.name = action.payload},
        changeAge : (state,action)=>{state.age = action.payload},

    }
    
})

export const {changeName,changeAge}= userSlice.actions;
export default userSlice.reducer;