import React,{useState} from 'react'

export default function MyUseState(props) {

    const [country, setCountry] = useState("India");

    const [count, setCount] = useState(0);

    const [cities, setCities] = useState({
        value : [
            {id:1,name:"Chennai"},
            {id:2,name:"Bangalore"},
            {id:3,name:"Hyderabad"},
            {id:4,name:"Madurai"},
        ]
    });
 
    console.log(country);

    if (country==="India"){
        setCountry("Singapore")
    }

    const onSelectHandler = (e) => {
        setCountry(e.target.value);
        setCount(count+1);
    }

    return (
        <div>
            <h1>The Country is - {country}</h1>
            <h2>{count}</h2>
            <select onChange={onSelectHandler}>
                {
                    cities.value.map((cty)=>{
                        return (<option value={cty.id}>{cty.name}</option>);
                    })
                }
            </select>
        </div>
    )
}
