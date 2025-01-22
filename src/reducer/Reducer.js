import { createSlice } from "@reduxjs/toolkit";

const Reducer=createSlice({
    name:'Counter',
    initialState:0,
    reducers:{
        increment:state=>state+1,
        decrement:state=>state-1,
        reset:state=>state*0
    }
})

export const {increment,decrement,reset} =Reducer.actions
export default Reducer.reducer