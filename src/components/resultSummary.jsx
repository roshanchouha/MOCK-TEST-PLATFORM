import React from "react";
import { Paper } from "@mui/material";
export default function ResultSummary(props) {
  return (
    <div>
      <Paper
        elevation={2}
        className="perFormanceCard d-flex justify-content-left align-items-center gap-4"
      >
        <div className="ps-2">
          <img src={props.img} alt="" width="40px" height="40px" />
        </div>
        <div>
          <div className="fw-medium">{props.score}</div>
          <div className={(props.result== 'Passed')?'text-success':'text-danger'}>{props.result}</div>
          <div className="lightText text-secondary ">{props.name}</div>
        </div>
      </Paper>
    </div>
  );
}
