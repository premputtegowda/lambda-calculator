import React, {useState} from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorValues] = useState(operators);
  
  return (
    <div className="opr-btn-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorValues.map((operator, index)=>(
         <OperatorButton key={index} operatorValue = {operator} />
         
       ))}
    
    </div>
  );
};

export default Operators;