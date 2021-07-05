import React,{useState,useEffect} from 'react'

export default function Counter() {

    const [count,setCount] = useState(()=>{
        let value;

        try {
            value = JSON.parse(window.localStorage.getItem("my-app-count") || '0');
            console.log("=============Fetched=" + new Date());
            console.log(value);
        }catch(e){
            value=0;
        }
        return value;
    });


    useEffect(()=> {
        window.localStorage.setItem("my-app-count",count);
        document.title = "The counter is..." + count;
    },[count]);

    const handleIncrementCounter = ()=> {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleIncrementCounter}>{count}</button>
        </div>
    )
}
