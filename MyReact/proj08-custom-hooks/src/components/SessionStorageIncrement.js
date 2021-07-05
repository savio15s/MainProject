import React,{useState,useEffect} from 'react'

export default function SessionStorageIncrement(key,defaultValue){

    const [state,setState] = useState(()=>{
        let value=0;
        console.log("X===========================1");

        try {
            value = window.sessionStorage.getItem(key) || String(defaultValue);
            console.log("X===========================2:" + value);
        }catch(e){
            value = 0;
        }

        return  parseInt(value);

    });

    useEffect(
        ()=>{
            console.log("X==================" + key + "," + state)
            window.sessionStorage.setItem(key,state);
        },[state]
    );

    return [state,setState];
}