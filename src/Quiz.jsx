import React, { useEffect, useState } from "react";
import Questions from "./components/Questions";
import { moveNextQuestion, movePrevQuestion } from "./hooks/fetchQuestion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pushAnswer } from "./hooks/setResult";
import Paper from "@mui/material/Paper";
import PositionedMenu from "./components/DropDown";
import { moveAtPosition } from "./Redux/question_reducer";
import { maintainResult } from "./Redux/result_reducer";
var checkValue
export default function Quiz() 
{
   
  let [countInc,setcountInc]=useState(0)
  let [countDec,setcountDec]=useState(0)
  const result = useSelector((state) => state.result.result);
  const name =  useSelector((state) => state.result.userID);
  const head = useSelector((state) => state.quizname.topicName);
  // const traceArr = useSelector((state)=>state.result.maintainChecked[0].checked)
  const checkArr = useSelector((state)=>state.result.result)
  

  const [checked, setchecked] = useState(-1);
  const { queue, trace } = useSelector((state) => state.question);
  const state = useSelector((state) => state.question.queue);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(state);
    // console.log(result[trace-1]);
    // console.log(trace-1);
    //  console.log(queue.length)
    console.log(checkArr)
  });
  const onPrev = () => {
    if (trace > 0) {
      dispatch(movePrevQuestion());
    }
  };
  const onNext = () => {
    
    if (queue.length > trace) {
      dispatch(moveNextQuestion());
    
      if (result.length <= trace) {
        dispatch(pushAnswer(checked));
      }
    }
    // dispatch(maintainResult({trace,checked}))
    setchecked(-1);
  };



  const onPostion =(e) =>{
    alert('Random access is not allowed')
    //  dispatch(moveAtPosition(e))
     checkValue =e;
  }


  const onSubmit = () => {
    
    navigate("/result");
  };
  const onCancel =()=>{
      setcountInc(0);
      setcountDec(0);
  }
  const onSubmit2 =() =>{
    result.map((val,index)=>( result[index] >= 0?setcountInc(++countInc):setcountDec(++countDec)))
    
  }

  // if (result.length >= queue.length) {
  //   navigate("/result");
  // }
  const onChecked = (index) => {
    setchecked(index);
  };

   
 

  return (
    <div className="container-fluid min-vh-100">
      <div className="container5">
        <div>
          <h1>heading</h1>
        </div>
        <div>
          <hr />
        </div>
        <div className="article">
          <div className="section">
            <div className="btn btn-primary">{head}</div>
            <Paper elevation={3}>
              <div className="sectionHeading d-flex justify-content-between align-items-center">
                <div className="fw-medium">Question No.{trace + 1}</div>
                <div className="d-flex gap-3 ">
                  <div className="menu d-flex justify-content-center align-items-center">
                    View in <PositionedMenu />
                  </div>
                  <div className="text-center ">
                    <div className="marks">Marks</div>
                    <div className="d-flex gap-2">
                      <div className="plus">+10</div>
                      <div className="minus">-0</div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
            <div>
              <div className="m-4">Question:</div>
              <div>
                <div>
                  <Questions onChecked={onChecked} />
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <div className="part1 ">
              <div className="fw-bold">{name}</div>
              <div className="btn btn-primary my-3">Time Left: 00:00:00</div>
            </div>
            <div className="part2 ">
              <div className="checkbox">
                {state.map((val, index) => (
                  <div onClick={()=>onPostion(index)}
                       
                  //  className={` count ${checkArr.length > index ? checkArr[index].checked >= 0?'fill':checkArr[index].checked == -1?"notAnswer":'unfill' :'unfill' }`}
    
                    className={` count  ${
                      result[index] >= 0 
                        ? "fill"
                        : result[index] == -1 
                        ? "notAnswer"
                        : "unfill"
                    }`}
                  >
                       {index + 1}
                  </div>
                   
                ))}
              </div>
            </div>
            <div className="part3">
              <div className="d-flex gap-2 justify-content-center align-items-center">
                <div className="count1"></div>
                <div className="tag1">Answered</div>
              </div>
              <div className="d-flex gap-2 justify-content-center align-items-center">
                <div className="count2"></div>
                <div className="tag1">Not Answered</div>
              </div>
              <div className="d-flex gap-2 justify-content-center align-items-center">
                <div className="count3"></div>
                <div className="tag1">Not Visited</div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex footer  justify-content-around  ">
          {trace !== 0 ? (
            <button onClick={onPrev} className="whiteButton">
              Prev
            </button>
          ) : (
            <div> </div>
          )}
          <div className=" d-flex gap-3">
            {trace > queue.length - 2 ? (
              <div></div>
            ) : (
              <button onClick={onNext} className="whiteButton">
                Next
              </button>
            )}

            <div>
              <button
                type="button"
                className="whiteButton"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={onSubmit2}
              >
                Submit
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Do you want to submit the Test ?
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={onCancel}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Sections</th>
                            <th scope="col">No of Question</th>
                            <th scope="col">Answered</th>
                            <th scope="col">Not Answered</th>
                            <th scope="col">Not Visited</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">React-Basic</th>
                            <td>{queue.length}</td>
                            <td>{countInc}</td>
                            <td>{countDec}</td>
                            <td>{queue.length-(countInc+countDec)}</td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="whiteButton"
                        data-bs-dismiss="modal"
                        onClick={onCancel}
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        onClick={onSubmit}
                        className="whiteButton"
                        data-bs-dismiss="modal"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
