import "./SeasonsDisplay.css";
import React from "react";

const seasonConfig = {
  winter: { text: "burr, It is cold", iconName: "snowflake" },
  summer: { text: "let's hit the beach", iconName: "sun" }
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonsDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`Season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h2 className="ui header">{text}</h2>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonsDisplay;
