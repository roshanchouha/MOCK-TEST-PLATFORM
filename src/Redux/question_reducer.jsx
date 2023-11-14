import {createSlice} from '@reduxjs/toolkit'

export const questionReducer= createSlice({
    name:'questions',
    initialState:{
        queue:[],
        answers:[],
        trace:0
    },
    reducers:{
        startExamAction:(state,action)=>
        {
             let {question,answers}=action.payload
            return{
                  ...state,
                  queue:question,
                  answers:answers
            }
        },
        moveNextAction:(state,action)=>
        {
            return{
                ...state,
                trace:state.trace + 1
            }
        },
        movePrevAction:(state,action)=>
        {
            return{
                ...state,
                trace:state.trace - 1
            }
        },
        moveAtPosition:(state,action)=>
        {
            return{
                ...state,
                trace:action.payload
            }
        },
        resetAllAction:(state,action)=>{
            return{
                     queue:[],
                     answers:[],
                     trace:0
                  }
        }
    }

})

export const {startExamAction,moveNextAction,movePrevAction,resetAllAction,moveAtPosition} = questionReducer.actions;
export default questionReducer.reducer;
  