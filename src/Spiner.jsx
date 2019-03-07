import React from "react";

const Spiner = props => {
  return (
    <div>
      <div className="ui active dimmer">
        <div className="ui text loader">{props.message}</div>
      </div>
    </div>
  );
};
export default Spiner;
