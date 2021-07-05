import React,{useState} from "react";
import SweetAlert,{onConfirm} from "react-bootstrap-sweetalert";

export default function Myalert(props) {
  

  const [alert,setAlert] = useState(null);
  
  const hideAlert = () => {
    console.log("============HideAlert");
    setAlert(null);
    props.onOk();
  }

  const cncl = () => {
    console.log("Cancelled!!");
    return true;
  };

  return (
    <div>
      <SweetAlert success title="Woot!" onConfirm={hideAlert}>
       {props.message}
      </SweetAlert>
    </div>
  );
}
