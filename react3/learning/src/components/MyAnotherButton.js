import React, { useState } from 'react'

export default function MyAnotherButton() {
    
    const [buttonText, setButtonText] = useState("Click me, please");

    const onHandleClick = ()=>{
        setButtonText("Button Clicked" + new Date());
    };

    return (
        <div>
            <button onClick={onHandleClick}>{buttonText}</button>    
        </div>
    )
}

