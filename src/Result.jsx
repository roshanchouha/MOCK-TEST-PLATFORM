import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ResultTable from './components/ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import { resetAllAction } from './Redux/question_reducer';
import { resetResult } from './Redux/result_reducer';
import { attempt_number, correctAnswer, earnpoint, flagpoint } from './helper/helper';
import { usePublicResult } from './hooks/setResult';
import { resetQuizName } from './Redux/Quizname';
import Paper from "@mui/material/Paper";
 
import ResultSummary from './components/resultSummary';
ResultSummary
export default function Result() {

    const dispatch = useDispatch();
     const points =10;
     const zero=0;
    const {question:{queue,answers},result:{userID,result}}=useSelector(state=>state)
    useEffect(()=>{
        console.log(correct);
        console.log(answers)
        console.log(result)
    })

    const TotalPoints = queue.length*10;
    const attempts = attempt_number(result);
    const earnPoint = earnpoint(result,answers,points);
    const flag = flagpoint(TotalPoints,earnPoint);  
    const correct = correctAnswer(result,answers,zero);
    

  
    
    console.log({result,username:userID,attempts,earnPoint,achived: flag?'Passed':'Failed'})
    usePublicResult({result,username:userID,attempts,points:earnPoint,achived: flag?'Passed':'Failed'})
    
    const onSelect= ()=>{
        dispatch(resetAllAction())
        dispatch(resetResult())
        dispatch(resetQuizName())
    }
  return (
    <div className='container col mx-10 '>
         <h1 className='text-center'>Test Result</h1>
       <div className='resultContainer'>
        <Paper elevation={5}>
            <div className='rank'>
                 <Paper elevation={2}> 
                     <div className='rankCard d-flex justify-content-center align-items-center gap-2'>
                        <div>
                             <img src="image/top-three.png" alt="" width='40px' height='40px'/>
                        </div>
                        <div>
                             <div className='fw-bold'>
                                 Your all India Rank is 10 out 20
                             </div>
                             <div className='lightText text-secondary'>
                                 Rank
                             </div>
                        </div>
                   </div>
               </Paper>
           </div>
        </Paper>

        <Paper elevation={4}>
            <div className='performance'>
            <div className='p-2 fw-bold text-primary'>My Overall performance summary</div>
                  <div className='d-flex justify-content-left align-items-center gap-4 p-4'>
                   
                   <ResultSummary  img={"image/QA.png"} score={queue.length} name={'Questions'}/>
                   <ResultSummary  img={"image/checklist.png"} score={ `${attempts}/${queue.length}`} name={'Attempted'}/>
                   <ResultSummary  img={"image/checkmark.png"} score={ `${correct.length}/${attempts}`} name={'Correct'}/>
                   <ResultSummary  img={"image/wrong.png"} score={ `${attempts-correct.length}/${attempts}`} name={'Wrong'}/>
                   <ResultSummary img={"image/score.png"} score={ `${earnPoint}/${TotalPoints}`} name={'Score'}/>
                   <ResultSummary  img={"image/aim.png"} result={flag?'Passed':'Failed'} name={'Result'}/>
                  </div>
            </div> 
         </Paper>

         <div className='RestartBtn'>
               <Link to='/' className=' Restart-btn btn btn-warning ' onClick={onSelect}>Home</Link>
           </div>
           
 
           <div className='  col-5 mx-auto p-3  mt-5 '>
              <ResultTable />
         </div>
       </div>   
        
    </div>
  )
}
