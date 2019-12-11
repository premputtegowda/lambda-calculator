import React from "react";


const NumberButton = (props) => {
 
  return (
    
    <div className="btns">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button" onClick = {() => props.showValue(props.numberValuebtn)}>
        
       {props.numberValuebtn}
   
      </button>
    </div>
  );
};

export default NumberButton;