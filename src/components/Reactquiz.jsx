import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ScrollDialog from "./Rule";
import { useDispatch, useSelector } from "react-redux";
import { setQuizName } from "../Redux/Quizname";
import { getServerData } from "../helper/helper";
import { Paper } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const img = "./image/React.png";
const Reactquiz = (props) => {
  const [array, setArray] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let datas = await getServerData("http://localhost:5000/api/question", (data) => data);
        console.log(datas);
        for (let i = 0; i < datas.length; i++) {
          for (let j = 0; j < datas[i].question.length; j++) {
            if (datas[i].question[j].name === props.name) {
              setArray((prevArray) => [...prevArray, datas[i].question[j].question]);
            }
          }
        }
      } catch (error) {
        console.log("data not found");
      }
    };

    fetchData();
  }, [props.name]);
     
  return (
    <div>
        <Paper elevation={ isHovered?20:5} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} className="Paper my-4">
        <div className="card" style={{ width: "18rem", height: "25rem" }}>
        <img src={props.image} className="card-img-top" alt="..."  width='200px' height='142px'/>
        <div className="card-body">
          <h5 className="card-title">{props.head}</h5>
          {/* <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, blanditiis.</p> */}
          <div className=" d-flex row my-3 justify-content-around  p-1 ">
            <div className="d-flex row   gap-3 ">
               <div className="">
                <div className="fs-6 Question "><LanguageIcon className="mx-2" />English</div>
              </div>
              <div className="">
                <div className="fs-6 Question "> <QuestionAnswerIcon  className="mx-2 "/>{array.length}  Question</div>
              </div>
              <div className="">
              <div className="fs-6 Question "><AccessTimeIcon className="mx-2" />Time {array.length}   min</div>
              </div>
              <div>
                <div className="fs-6 Question"><img src="./image/marks.png" alt="" width='25px' height='25px' className="mx-2" />{array.length*10} Points</div>
              </div>
               
            </div>
            <div className="button1">
              <NavLink className=" button  text-danger fs-6 fw-bold  text-decoration-none" to={`${props.link}/${props.head}`}>
                   TEST
              </NavLink>
            </div>
          </div>
        </div>
      </div>
        </Paper>
    </div>
  );
};

export default Reactquiz;
