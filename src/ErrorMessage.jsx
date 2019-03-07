import React from "react";
import "./SeasonsDisplay.css";

const ErrorMessage = props => {
  return (
    <div className="Error-message ">
      <h2 className="ui red header">{props.err}</h2>
    </div>
  );
};
export default ErrorMessage;
