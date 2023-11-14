import { Paper } from "@mui/material";
import React from "react";
import StartIcon from '@mui/icons-material/Start';
const img = "../image/React.png";

export default function FirstLook({ handleClickOpen ,head }) {
  const onSelect = () => {
    handleClickOpen();
  };
  // <div className='btn btn-danger' onClick={()=>onSelect()}>Start Test</div>
  return (
    <div className=" container-fluid  min-vh-100    ">
      <div className="  min-vh-100 ">
        <Paper elevation={5}> <div className="insHeading p-2 my-2">
        <div className="d-flex justify-content-between align-items-center">
             <h3>LOGO</h3>
             <div className="fs-5 fw-medium">{head}</div>
        </div>
        </div></Paper>
        <div className="insBox  p-2 ">
           <div className="insPart1">
              <div className="instruction">
                  <h3 className="text-primary">General Instructions:</h3>
                  <ul>
                     <li>The total duration of the examination is 60 minutes.</li>
                     <li>The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available to you for completing the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</li>
                     <li>The Question Palette displayed on the right side of screen will show the status of each question using one of the following <br />
                      symbols:
                            <ol>
                                <li>Answered questions in green colour.</li>
                                <li>Unanswered questions in red colour.</li>
                                <li>Marked for review questions in blue colour</li>
                            </ol>
                        </li>
                        <li>Marked for review status for a question simply indicates that you would like to review the question again.</li>
                        <li>Please note that if a question is answered and ‘marked for review’, your answer for that question will be considered in the evaluation.</li>
                        <li>You can click on the question palette to navigate faster across questions.</li>
                  </ul>
                 
                  <h3 className="text-primary">Answering a Question:</h3>
                    <ul>
                         <li>Procedure for answering multiple-choice type questions:
                             <ol>
                                <li>To select your answer, click on the button of one of the options.</li>
                                <li>To deselect your chosen answer, click again on the button of the chosen option again or click on the Clear Response  button.</li>
                                <li>To change your chosen answer, click on the button of another option.</li>
                                <li>To save your answer, you MUST click on the Save Next  button.</li>
                             </ol>
                           </li>
                          <li>To mark a question for review, click on the Mark for Review & Next  button.</li>
                          <li>To change answer to a question that has already been answered, select that question from the Question Palette and then follow the procedure for answering that type of question.</li>
                          <li>Note that ONLY questions for which answers are either saved or marked for review after answering, will be considered for evaluation.</li>
                          <li>To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering that type of question.</li>
                          <li>Note that ONLY Questions for which answers are saved or marked for review after answering will be considered for evaluation.</li>
                    </ul>

                    <h3 className=" text-primary">Navigating through sections:</h3>
                     <ul>
                        <li>Click on the question number in the Question Palette at the right of your screen to go to a question.</li>
                        <li>Note that using this option does NOT save your answer.</li>
                        <li>Click on Save & Next  to save your answer for a question and then move to the next question.</li>
                        <li>If you want to keep a question marked for review, click on the button Mark for Review & Next  to save your answer for the current question and then proceed to the next question.</li>
                        <li>For the best Mock test experience, please do not switch to another tab/ window.</li>
                     </ul>

                     <h3 className="text-primary">Read the following Instruction carefully:</h3>
                      <ul>
                         <li>This test comprises of multiple-choice questions.</li>
                         <li>Each question will have only one of the available options as the correct answer.</li>
                         <li>You are advised not to close the browser window before submitting the test.</li>
                         <li>In case, if the test does not load completely or becomes unresponsive, click on browser's refresh button to reload.</li>
                      </ul>

                      <h3 className="text-primary">Marking Scheme:</h3>

                      <ul>
                        <li>1 mark(s) will be awarded for each correct answer.</li>
                        <li>There will be 1/4th negative marking for each wrong answer.</li>
                        <li>No marks will be deducted for un-attempted questions</li>
                      </ul>
              </div>
           </div>
           <div className="insPart2">
              <div className="insPart21">
                   <div className="fs-6 fw-medium py-2">Roshan Chouhan</div>
                   <div className="btn btn-primary w-75">Time Left:</div>
              </div>
              {/* <div className="insPart22">
                   <div className="fs-6 fw-medium">Roshan Chouhan</div>
                   <div className="btn btn-primary">Time Left:</div>
              </div>
              <div className="insPart23">
                   <div className="fs-6 fw-medium">Roshan Chouhan</div>
                   <div className="btn btn-primary">Time Left:</div>
              </div> */}
           </div>
        </div>
        <Paper elevation={5}> <div className="insFooter p-1">
             <div className="d-flex justify-content-end pe-5">
                 <button onClick={()=>onSelect()} className="whiteButton">I am ready to begin <span> <StartIcon /></span></button>
             </div>
        </div></Paper>
         
      </div>
    </div>
  );
}
