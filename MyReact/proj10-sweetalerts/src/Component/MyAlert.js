import React from 'react';  
import Swal from "sweetalert2"; 

export default function MyAlert(props) {

   const HandleClick= () => {  
        Swal.fire({  
          title: 'Success',  
          type: 'success',  
          text: 'Your work has been saved.'.concat(props.message),  
        });  
      }

    return (     
        <div>
            {
                // Swal.fire({
                //     title: 'Success',
                //     type: 'success',
                //     text: 'Your work has been saved.',
                // })
                HandleClick()
            }
        </div>
    );
}
