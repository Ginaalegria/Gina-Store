import React from "react";
import "./Button.css";
const Button = ({ num, click }) => {
  return (
    <button className="ui-change-btn" onClick={() => click(true)}>
      Agregaste<span>{num}</span> {num <= 1 ? "Articulo" : "Articulos"}
    </button>
  );
};

export default Button;
