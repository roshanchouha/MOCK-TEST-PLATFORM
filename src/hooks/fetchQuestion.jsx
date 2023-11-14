import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as Action from "../Redux/question_reducer"
import { getServerData } from "../helper/helper"

export const useFetchQuestion=()=>{
    const dispatch = useDispatch();
  
    const [getData,setGetData] = useState({isLoading:false,apiData:[],serverError:null})
     const name = useSelector(state=>state.quizname.Quiz)
     console.log(name);
    
   
    useEffect(()=>{
      setGetData(prev =>({...prev,isLoading:true}));


      (async()=>{
          
         try { 
              
            
             let datas= await getServerData('http://localhost:5000/api/question',(data)=>data)
                console.log(datas[0].question[0].name);
                console.log(datas);


                // setGetData(prev=>({...prev,isLoading:true,apiData:{question:datas[1].question,answers:datas[1].answers}}))
                // dispatch(Action.startExamAction({question:datas[1].question,answers:datas[1].answers}))
                for(var i=0;  i<datas.length; i++)
                {
                    console.log(name);
                   
                    if(datas[i].question[0].name == name)
                    {
                         
                        
                            // setGetData(prev=>({...prev,isLoading:true,apiData:{question:datas[i].question,answers:datas[i].answers}}))
                            dispatch(Action.startExamAction({question:datas[i].question,answers:datas[i].answers}))
                        
                    }else{
                        console.log('quiz not found')
                    }
                }
                 
         } catch (error) {
             setGetData(prev=>({...prev,isLoading:false}))
             setGetData(prev=>({...prev,serverError:error}))
         }
      })(); 
    },[dispatch]);
    return [getData,setGetData];

}

export const moveNextQuestion=()=> async(dispatch)=>{
     try {
        dispatch(Action.moveNextAction());
     } catch (error) {
        console.log("error");
     }
}

export const movePrevQuestion=()=> async(dispatch)=>{
        try {
              dispatch(Action.movePrevAction());
        } catch (error) {
              console.log("error");
        }
    }
