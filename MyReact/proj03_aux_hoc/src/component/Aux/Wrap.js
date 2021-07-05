import React from 'react'

export default function Wrap(props) {

    return (
        <div>
            <h1>Wraping Component</h1>
            {props.children}
        </div>
    )
}
