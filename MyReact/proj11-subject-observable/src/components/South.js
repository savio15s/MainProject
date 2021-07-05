import React, { useState,useEffect } from 'react';
import { messageService } from '../_services/MessageService';
import Debug from '../_utilities/Debug';

export default function South() {

    const [res,setRes] = useState();

    useEffect(()=>{
        messageService.getMessage().subscribe(x=>{
            setRes(x);
        })
    },[]);
    

    return (

        <div className="col-xs-4">
            <h1>Data from South Component...</h1>
            <Debug values={res}/>
        </div>
            
  );
}
