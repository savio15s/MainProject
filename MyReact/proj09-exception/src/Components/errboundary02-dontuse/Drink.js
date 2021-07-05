import React from 'react'

export default function Drink({type}) {
    return (
        <div>
            <h1>Drinking - {type.toUpperCase()}</h1>
        </div>
    )
}
  