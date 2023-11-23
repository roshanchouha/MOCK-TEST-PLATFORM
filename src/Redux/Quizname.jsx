import { createSlice } from "@reduxjs/toolkit";


export const QuizQuestion= createSlice({
    name:'QuizName',
    initialState:{
        
        Quiz:null,
        topicName:null,
        timer:30*60
    },
    reducers:{
        setQuizName:(state,action)=>
        {
         
           state.Quiz=action.payload
        },
        settopicName:(state,action)=>
        {
         
           state.topicName=action.payload
        },
        resetQuizName:()=>{
            return {
                quizname:[],
                topicName:null
            }
        }
   }
})
export const {setQuizName,resetQuizName,settopicName} = QuizQuestion.actions;
export default QuizQuestion.reducer;
