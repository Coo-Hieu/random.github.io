import React, { useState, useEffect } from "react";
import "../Randomwheel/wheelname.scss";

function Wheelname() {
  function canvasWheel(e) {
    // debugger;
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 340;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "#fff";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#003300";
    context.stroke();
    return;
  }

  const [data, setData] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    canvasWheel();
  }, []);

  function handleValueChange(e) {
    console.log(e.target.value);
    setData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: data,
    };
    const newData = {
      id: list.length > 0 ? list.length + 1 : 1,
      ...formData,
    };
    const newDataList = [...list];
    newDataList.push(newData);
    setList(newDataList);
    setData("");

    localStorage.setItem("myListUser", JSON.stringify(newDataList));
  }

  console.log(list);
  return (
    <div className="container mt-5">
      {" "}
      <div className="canvas-container_zone" onLoad="draw();">
        <canvas id="myCanvas" width="700" height="700"></canvas>
      </div>
      <div className="player-wheel_zone">
        <ul>
          {list.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div>
      <div className="player-name_zone">
        <form onSubmit={handleSubmit}>
          <input
            className="input-name_wheel"
            type="text"
            placeholder="nhập tên thành viên"
            value={data}
            onChange={handleValueChange}
          />
        </form>
      </div>
    </div>
  );
}
export default Wheelname;
