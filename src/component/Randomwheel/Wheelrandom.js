import React, { useState } from "react";
import "../Randomwheel/wheelname.scss";

function Wheelname() {
  const [input, setInput] = useState("");
  // const [list, setList] = useState([]);

  function handleValueChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    // list.length > 0 ? setList([input]) : setList([...list, input]);
  }
  console.log(input);
  return (
    <div className="container mt-5">
      {" "}
      {/* <div onload="draw();">
        <canvas id="canvas"></canvas>
      </div> */}
      <div className="player-wheel_zone" />
      <div className="player-name_zone">
        <form onSubmit={handleSubmit}>
          <input
            className="input-name_wheel"
            type="name"
            placeholder="nhập tên thành viên"
            value={input}
            onChange={handleValueChange}
          />
        </form>
      </div>
    </div>
  );
}
export default Wheelname;
