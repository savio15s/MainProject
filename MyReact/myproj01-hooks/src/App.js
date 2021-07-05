import logo from './logo.svg';
import './App.css';
import MyClassComponents from './components/MyClassComponents';
import REact,{useState} from 'react';
import MyFuntionaComponent from './components/MyFuntionaComponent';
import SimpleForm from './components/SimpleForm';
import MyFormik from './components/MyFormik';


function App() {
  
  const [color,setColor] = useState("Red");
  const [toggle,setToggle] = useState(false);

  const handleColorChange = (e)=> {
    console.log("===================" + new Date());
    setColor(e.target.value);
  }

  const handleToggle = () =>{
    setToggle((p)=>{
      return !p;
    })
  }

  const handleLoginCompletion = (e) => {
    console.log("===========");
    console.log(e);
  }

  return (
    <div className="App">
      {toggle}
      <input type="text" value={color} onChange={handleColorChange} />
       
      {/* {!toggle && <MyFuntionaComponent color={color}/> }
      {toggle && <MyClassComponents color={color}/> }
      {color} - {toggle} */}
      
      {/* <SimpleForm onLoginCompletion={handleLoginCompletion}/>
      <button onClick={handleToggle}>Toggle</button> */}
      <MyFormik/>

    </div>
  );
}

export default App;
