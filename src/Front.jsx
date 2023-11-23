import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Reactquiz from "./components/Reactquiz";
import Paper from "@mui/material/Paper";
import Card from "./components/Card";
import cardData from "./database/cardData";
import QuestionCard from "./database/QuestionCard";
import { useSelector } from "react-redux";
import { getServerData } from "./helper/helper";
import styled from "@emotion/styled";
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
    <div >
      <div >
        <div className=" navbar border border-2 rounded-3 d-flex justify-content-between align-items-center px-4    ">
          <div className="fs-2 fw-bolder"> <img src="./image/logo3.png" alt="" width="100px"/></div>
          <nav className=" d-flex gap-3  fw-medium">
             <button className="whiteButton">Login</button>
             <button className="whiteButton">Sign-Up</button>
          </nav>
        </div>

        <div className="banner">
          <div className="bannerText">
            <div className="fs-1 fw-medium">Mock Tests</div>
            <div className=" mx-4 mt-3">
              <p>
                Technical Test is a very important process of most
                of the placement tests. Crack your next placement with series of 
                 <span className="fs-6 fw-bold"> ExamForge</span> practice and mock tests. Practice subject-wise  tests. Take real-time mock tests with other
                students and test your preparation.
              </p>
            </div>
          </div>
        </div>

        <div className="popularMockTest">
          <div className=" text-center ">
            {" "}
            <div class="line-container mt-5">
              <div class="line"></div>
              <div class="text head fs-3 fw-medium w-25 text-center">
                {" "}
                SUBJECTS
              </div>
            </div>
          </div>
          <div className="category scrollbar my-5" id="scrollbar1">
            {cardData.map((val, index) => (
              <Card img={val.img} name={val.name} />
            ))}
          </div>
        </div>

        <div class="line-container">
          <div class="line"></div>
          <div class="text head fs-3 fw-medium w-25 text-center">
            {" "}
            MOCK TESTS
          </div>
        </div>

        <div id="Card-Container" className="">
          <div className="Cards mx-auto   ">
            {QuestionCard.map((val, index) => (
              <Reactquiz
                link={val.link}
                image={val.image}
                name={val.name}
                head={val.head}
              />
            ))}
          </div>
          <div className="footerPart ">
              <div className="footerContainer1">
                   <div className="p-2"><img src="./image/logo3.png" alt="" width="250px"/></div>
                   <div className="p-2">
                       <h5 >About ExamForge</h5>
                        <p > ExamForge is one of India’s leading Tech exam preparation platforms. Our mission is to provide the best online mock test platform for all Tech  job aspirants.</p>
                        <div className="d-flex">
                            <div> <img src="./image/fb.png" alt="" /></div>
                            <div> <img src="./image/insta.png" alt="" /></div>
                            <div> <img src="./image/linkdin.png" alt="" /></div>
                            <div> <img src="./image/youtube.png" alt="" /></div>
                            <div> <img src="./image/twiter.png" alt="" /></div>

                        </div>
                   </div>
              </div>
              <div className="footerContainer2">
                   <h4 className="Heading">Get in touch with us</h4>
                    <div className="footerContainer21">
                         <div>
                             <div className="FontColor"> <PlaceIcon/> <span>Address</span></div>
                             <div className="fontColor1">
                                42/10, Agrawal Colony, Indore, Madhya Pradesh, India - 454775.
                             </div>
                         </div>
                         <div>
                             <div className="FontColor"> <EmailIcon/> <span>Email</span></div>
                             <div className="fontColor1">
                                 roshanchouhan29@gmail.com
                             </div>
                         </div>
                         <div>
                             <div className="FontColor"> <CallIcon/> <span>Phone</span></div>
                             <div className="fontColor1">
                               +91-6264554662, +91-8945676232
                             </div>
                         </div>
                         <div>
                             <div className="FontColor"> <WhatsAppIcon/> <span>WhatsApp</span></div>
                             <div className="fontColor1">
                                +91-6264554662
                             </div>
                         </div>
                    </div>
              </div>
              
          </div>
        </div>
      </div>
         
    </div>
  );
}; 

export default Front;
