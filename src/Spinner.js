import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

//default message added
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
