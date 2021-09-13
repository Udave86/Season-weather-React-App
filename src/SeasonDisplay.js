import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  //text display
  const text =
    season === "Winter" ? "Burr, It;s chilly" : "Let's hit the beach";
  return <h1>{text}</h1>;
};

export default SeasonDisplay;
