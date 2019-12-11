import React from "react";

const OperatorButton = (props) => {
  console.log(props);
  return (
    <div className="btns">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button">
        
        <span role="sym" arial-label="symbol">{props.operatorValue.char}</span> 
 
       </button>
    </div>
  );
};

export default OperatorButton;