import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Reactquiz from "./components/Reactquiz";
import Paper from "@mui/material/Paper";
import Card from "./components/Card";
import cardData from "./database/cardData";
import { useSelector } from "react-redux";
import { getServerData } from "./helper/helper";
import styled from "@emotion/styled";
const javascript = "./image/javaScript.png";
const img = "./image/React.png";
const node = "./image/node.webp";

const Front = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className=" container-fluid  ">
      <div className=" navbar border border-2 rounded-3 d-flex justify-content-between align-items-center px-4    ">
        <div className="fs-2 fw-bolder">Logo</div>
        <nav className=" d-flex gap-3  fw-medium">
          <div className="">Home</div>
          <div>Quiz</div>
          <div>Service</div>
          <div>Contect US</div>
        </nav>
      </div>

      <div className="banner">
        <div className="bannerText">
          <div className="fs-1 fw-medium">Mock Tests</div>
          <div className=" mx-4 mt-3">
            <p>
              Technical and Aptitude Test is a very important process of most of
              the placement tests. Crack your next placement with series of
              PrepBytes practice and mock tests. Practice subject-wise and
              company-wise tests. Take real-time mock tests with other students
              and test your preparation.
            </p>
          </div>
        </div>
      </div>

      <div className="popularMockTest">
        <div className=" text-center m-4">
          {" "}
          <div class="line-container mt-5">
          <div class="line"></div>
          <div class="text head fs-3 fw-medium w-25 text-center"> SUBJECTS</div>
        </div>
        </div>
        <div className="category">
          {cardData.map((val, index) => (
            <Card img={val.img} name={val.name} />
          ))}
        </div>
      </div>

      <div class="line-container">
          <div class="line"></div>
          <div class="text head fs-3 fw-medium w-25 text-center"> MOCK TESTS</div>
        </div>

      <div id="Card-Container" className="">
         
        <div className="fs-3 fw-bold"></div>
        <div className="Cards mx-auto">
          <Paper elevation={10}
              
              onMouseLeave={handleMouseLeave}
             className="Paper">
            {" "}
            <Reactquiz
              link={"/home/ReactQuestion"}
              image={img}
              name={"ReactQuestion"}
              head={"React.js"}
            />
          </Paper>
          <Paper elevation={10} className="Paper">
            {" "}
            <Reactquiz
              link={"/home/JavaScriptQuestion"}
              image={javascript}
              name={"JavaScriptQuestion"}
              head={"JavaScript"}
            />
          </Paper>
          <Paper elevation={10} className="Paper">
            {" "}
            <Reactquiz
              link={"/home/HtmlQuestion"}
              image={"./image/html1.svg"}
              name={"HtmlQuestion"}
              head={"HTML"}
            />
          </Paper>
          <Paper elevation={10} className="Paper">
            {" "}
            <Reactquiz
              link={"/home/CssQuestion"}
              image={"./image/css5.jpg"}
              name={"CssQuestion"}
              head={"CSS"}
            />
          </Paper>
        </div>
      </div>

      <div id="Card-Container" className="">
        <div className="fs-3 fw-bold"></div>
        <div className="Cards mx-auto">
          <Paper elevation={10} className="Paper">
            {" "}
            <Reactquiz
              image={"./image/nodejs.png"}
              link={"/home/NodeQuestion"}
              name={"NodeQuestion"}
              head={"Node js"}
            />
          </Paper>
          <Paper elevation={10} className="Paper">
            {" "}
            <Reactquiz
              image={"./image/mongo.png"}
              link={"/home/MongodbQuestion"}
              name={"MongodbQuestion"}
              head={"mongoDB"}
            />
          </Paper>
          <Paper elevation={10} className="Paper">
            {" "}
            <Reactquiz
              image={"./image/c++.png"}
              link={"/home/CppQuestion"}
              name={"CppQuestion"}
              head={"C++"}
            />
          </Paper>
          <Paper elevation={10} className="Paper">
            {" "}
            <Reactquiz
              image={"./image/c.png"}
              link={"/home/CQuestion"}
              name={"CQuestion"}
              head={"C"}
            />{" "}
          </Paper>
        </div>
      </div>

      <div id="Card-Container" className="">
        <div className="fs-3 fw-bold"></div>
        <div className="Cards mx-auto">
          <Paper elevation={10} className="Paper">
            {" "}
            <Reactquiz
              image={"./image/java3.png"}
              link={"/home/JavaQuestion"}
              name={"JavaQuestion"}
              head={"JAVA"}
            />
          </Paper>
          <Paper elevation={10} className="Paper">
            {" "}
            <Reactquiz
              image={"./image/Sql.jpg"}
              link={"/home/SqlQuestion"}
              name={"SqlQuestion"}
              head={"SQL"}
            />
          </Paper>
          <Paper elevation={10} className="Paper">
            {" "}
            <Reactquiz image={"./image/404.jfif"} head={"404"} />
          </Paper>
          <Paper elevation={10} className="Paper">
            {" "}
            <Reactquiz image={"./image/404.jfif"} head={"404"} />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Front;
