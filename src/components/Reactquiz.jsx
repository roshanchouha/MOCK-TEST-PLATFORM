import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ScrollDialog from "./Rule";
import { useDispatch, useSelector } from "react-redux";
import { setQuizName } from "../Redux/Quizname";
import { getServerData } from "../helper/helper";
const img = "./image/React.png";
const Reactquiz = (props) => {
  const [array, setArray] = useState([]);

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
      <div className="card" style={{ width: "18rem", height: "25rem" }}>
        <img src={props.image} className="card-img-top" alt="..."  width='200px' height='142px'/>
        <div className="card-body">
          <h5 className="card-title">{props.head}</h5>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, blanditiis.</p>
          <div className=" d-flex my-3 justify-content-around align-items-center">
            <div className="d-flex  text-center gap-3 ">
              <div className="">
                <div className="fs-5 fw-bolder">{array.length}</div>
                <div className="Question">Question</div>
              </div>
              <div className="border border-1"></div>
              <div>
                <div className="fs-5 fw-bolder">{array.length*10}</div>
                <div className="Question">Points</div>
              </div>
            </div>
            <div className="">
              <NavLink className=" button text-danger fs-6 fw-bold  text-decoration-none" to={`${props.link}/${props.head}`}>
                   TEST
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reactquiz;
