import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

const ResultTable = () => {
  const [getData, setData] = useState(undefined);

  useEffect(() => {
    getServerData("http://localhost:5000/api/result", (res) => setData(res));
  });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Attempts</th>
            <th scope="col">Earn Point</th>
            <th scope="col">Result</th>
          </tr>
        </thead>
        <tbody>
          {!getData ? (
            <h1 className="text-denger">Data not Found </h1>
          ) : (
            getData.map((val, index) => (
              <tr>
                <th scope="row">{index+1}</th>
                <td>{val.username}</td>
                <td>{val.attempts}</td>
                <td>{val.points}</td>
                <td className={val.achived == 'Passed'?'text-success':'text-danger'}>{val.achived}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
