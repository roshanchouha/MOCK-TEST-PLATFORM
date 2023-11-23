import React, { useEffect, useState } from "react";
import data from "../database/data";
import { useFetchQuestion } from "../hooks/fetchQuestion";
import { startExamAction } from "../Redux/question_reducer";
import { useDispatch, useSelector } from "react-redux";
 
import { updateAnswer } from "../hooks/setResult";
const Questions = ({onChecked}) => {
  const [checked, setchecked] = useState(undefined);
  const  [{isLoading,apiData,serverError}]=useFetchQuestion();
  const {trace} = useSelector(state=>state.question)
  const result = useSelector(state =>state.result.result)
 const dispatch = useDispatch();
  const questions= useSelector(state=>state.question.queue[state.question.trace])
  
  const question = data[0];

  useEffect(()=>{
     
    dispatch(updateAnswer({trace,checked}))
  },[checked])

  const onSelect = (index) => {
    
    onChecked(index);
     setchecked(index);
     dispatch(updateAnswer({trace,checked}))
      
  }

  // if(isLoading) return <h1>is Loading</h1>
  if(serverError) return <h1>{serverError || "unknown error"}</h1>
  return (
    <div className="container">
      <div className=" fs-6 m-2">{questions?.question}</div>
      <ul key={questions?.id}>
        {
            questions?.options.map((val,index) =>
        (
          <li className=" list-unstyled" key={index}>
            <input
            
              type="radio"
              value={true}
              id={`q1${index}-qutionid`}
              name="options"
              // checked={ result[trace] == index}
              onChange={()=>onSelect(index)}
              style={result[trace] == index? {display:'none'}:{} }
            />
            
            <label className={` Primary py-3 check ${result[trace] == index?'checked' : '' }`} htmlFor={`q1${index}-qutionid`}>
               {val}
            </label>
            {/* <div className={`check ${result[trace] == index?'checked' : '' }`} ></div> */}
          </li>
        )
        ) 
        }
      </ul>
    </div>
  );
};

export default Questions;
