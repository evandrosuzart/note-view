import React from "react";

import "./button.css";

const Button = ({ onClick, children }) => (
  <div>
    <button className="button" onClick={onClick}>
      {children}
    </button>
  </div>
);

export default Button;
