import { useState } from "react";
import Button from "./component/Button";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const counterDown = () => {
    setCounter(counter - 1);
  };
  const counterUp = () => {
    setCounter(counter + 1);
  };
  const counterReset = () => {
    setCounter(0);
  };
  return (
    <div className="container" style={{backgorundColor:"black"}}>
      <p className="count">{counter}</p>
      <div>
        <Button
          className="btn"
          style={{ backgroundColor: "red" }}
          onClick={counterDown}
          text="Minus"
        />
        <Button
          className="btn"
          style={{ backgroundColor: "blue" }}
          onClick={counterReset}
          text="Reset"
        />
        <Button
          className="btn"
          style={{ backgroundColor: "green", padding: "10px 15px" }}
          onClick={counterUp}
          text="Add"
        />
      </div>
    </div>
  );
};
export default Counter;
