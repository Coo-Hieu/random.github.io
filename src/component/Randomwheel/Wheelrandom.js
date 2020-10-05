import React, { useState, useEffect } from "react";
import "./wheelname.scss";

const colors = ["red", "blue", "pink", "orange"];

function Wheelname() {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);

  console.log(list);
  useEffect(() => {
    canvasWheel();
  }, list);

  function handleValueChange(e) {
    // console.log(e.target.value);
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
  }

  function handleRemoveUser(user) {
    const index = list.indexOf(user);
    const newDataList = [...list];
    newDataList.splice(index, 1);
    setList(newDataList);
  }

  const drawPeople = ({ context, nuaCanvas, radius, numberPeople }) => {
    for (let i = 0; i < numberPeople; i += 1) {
      context.fillStyle = colors[i];
      console.log(colors[i]);
      console.log({ ...context });

      context.moveTo(nuaCanvas, nuaCanvas);
      context.arc(
        nuaCanvas,
        nuaCanvas,
        radius,
        i === 0 ? 0 : ((2 * Math.PI) / numberPeople) * (i + 1),
        ((2 * Math.PI) / numberPeople) * (i + 1),
        false
      );
      context.lineTo(nuaCanvas, nuaCanvas);
      context.fill();
      context.font = "30px Arial";
      context.fillText(
        list,
        ((2 * Math.PI) / numberPeople) * (i + 1),
        ((2 * Math.PI) / numberPeople) * (i + 1)
      );
      console.log("danh sách", list);
      context.stroke();
    }
  };

  function canvasWheel(e) {
    // debugger;
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    const { width } = canvas;
    var nuaCanvas = width / 2;
    var radius = width / 2 - 5;

    context.beginPath();
    context.arc(nuaCanvas, nuaCanvas, radius, 0, 2 * Math.PI);
    context.fillStyle = "#fff";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#003300";
    context.stroke();
    drawPeople({ context, nuaCanvas, radius, numberPeople: 5 });
  }

  return (
    <div className="container mt-5">
      {" "}
      <div className="canvas-container_zone">
        <canvas id="myCanvas" width="700" height="700"></canvas>
      </div>
      <div className="player-wheel_zone">
        <ul>
          {list.map((user) => (
            <li key={user.id}>
              {user.name}
              <span onClick={handleRemoveUser} className="player-wheel_remove">
                <i className="fas fa-user-slash"></i>
              </span>
            </li>
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
