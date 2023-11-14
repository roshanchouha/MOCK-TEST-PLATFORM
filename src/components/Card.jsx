import React, { useState } from "react";
import Paper from "@mui/material/Paper";

export default function Card(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <Paper
        elevation={isHovered ? 20 : 5}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
         
        cursor: 'pointer',
      }}
        className="box d-flex justify-content-center  align-items-center"
      >
        <div>
          <div className="text-center">
            <img src={props.img} alt="" width="30px" height="30px" />
          </div>
          <div className=" image fw-medium text-center">{props.name}</div>
        </div>
      </Paper>
    </div>
  );
}
