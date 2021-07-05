import React,{useState,useEffect} from "react";
import ErrorComponent from "../ErrorComponent";
import ReactDOM from "react-dom";

export default function Farewell({ subject }) {
  var [hasanyError, setAnyHasError] = useState(false);

  
  useEffect(()=>{
    
    if (!subject) {
        console.log("================" + subject + ",true");
        setAnyHasError(true);
    } else {
        console.log("================" + subject + ",false");
    }
  },[])  
   
  //if (subject){
    //    setAnyHasError(true);
    //} else {
    //    setAnyHasError(false);
    // }
    return (
        <div>
        {
            // (!hasanyError && <h1>Super Data - {subject}</h1>)
            // (hasanyError && <ErrorComponent description={"Invalid Data"} />)

            hasanyError ? 
                <ErrorComponent description={"Invalid Data"}/> : 
                <h1>Super Data!! - {subject}</h1>

        }
        </div>
    )
  
}
