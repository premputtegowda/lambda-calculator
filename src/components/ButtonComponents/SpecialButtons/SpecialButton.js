import React from "react";

const SpecialButton = (props) => {
  return (
    <div className="btns">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button">
        
        <span>{props.specialValue}</span> 
 
       </button>
    </div>
  );
};

export default SpecialButton;