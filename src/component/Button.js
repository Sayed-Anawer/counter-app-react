import React from "react";
import "./Button"
import "./Button.css"
const Button = ({ className, text, style, onClick }) => {
  return (
    <button className={className} style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
