import { createSlice } from "@reduxjs/toolkit"
export const result=createSlice({
    name:'result',
    initialState:{
        userID:null,
        result:[],
        maintainChecked:[]
    },
    reducers:{
         setUserId:(state,action)=>{
            state.userID = action.payload
         },
         pushResultAction:(state,action)=>{
            state.result.push(action.payload)
         },
         updateResult:(state,action)=>{
             const {trace,checked}=action.payload
             state.result.fill(checked,trace,trace+1)
         },
         maintainResult:(state,action)=>{
            state.maintainChecked.push(action.payload)
            
         },
         resetResult:(state,action)=>{
            
            return{
                userID:null,
                result:[] ,
                maintainChecked:[]
            }
         }
    }
})
export const {setUserId,pushResultAction,resetResult,updateResult,maintainResult} = result.actions;
export default  result.reducer;