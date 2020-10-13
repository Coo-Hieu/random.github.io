import React, { useState, useEffect } from "react";
import Winwheel from "winwheel";
import "./wheelname.scss";

function Wheelname() {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);

  const segments = list.map((item) => ({
    ...item,
    fillStyle: getRandomColor(),
    text: item.name,
    textAlignment: "outer",
  }));

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
  }

  const theWheel = new Winwheel({
    canvasId: "myCanvas",
    numSegments: list.length,
    textFontSize: 14.5,
    rotationAngle: 0, // Rotate wheel slightly anti-clockwise.
    imageOverlay: true,
    innerRadius: 50,
    segments,
    // Note animation properties passed in constructor parameters.
    animation: {
      type: "spinToStop", // Type of animation.
      duration: 5, // How long the animation is to take in seconds.
      spins: 8, // The number of complete 360 degree rotations the wheel is to do.
    },
  });

  // function alertPrize(segement) {
  //   alert("chúc mừng bạn " + segments.text);
  // }

  // let wheelSpinning = false;

  // function startSpin() {
  //   if (wheelSpinning == false) {
  //     // statusButton(2);
  //     theWheel.startAnimation();

  //     wheelSpinning = true;
  //   }
  // }

  console.log(list);
  useEffect(() => {
    const c = theWheel.ctx;
    // Create pointer.
    if (c) {
      c.save();
      c.lineWidth = 2;
      c.strokeStyle = "black";
      c.fillStyle = "black";
      c.beginPath();
      c.moveTo(330, 10);
      c.lineTo(370, 10);
      c.lineTo(350, 42);
      c.lineTo(330, 10);
      c.stroke();
      c.fill();
      c.restore();
    }
  }, []);

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
    console.log(user, list);
    const newDataList = list.filter((x) => x.id !== user.id);
    setList(newDataList);
  }

  return (
    <div className="container mt-5">
      {" "}
      <div className="canvas-container_zone">
        <canvas id="myCanvas" width="700" height="785"></canvas>
      </div>
      <div className="player-wheel_zone">
        <ul>
          {list.map((user) => (
            <li key={user.id}>
              {user.name}
              <span
                onClick={() => handleRemoveUser(user)}
                className="player-wheel_remove"
              >
                <i className="fas fa-user-slash"></i>
              </span>
            </li>
          ))}
        </ul>
        <button onClick={() => theWheel.startAnimation()}>
          Spin the Wheel
        </button>
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
