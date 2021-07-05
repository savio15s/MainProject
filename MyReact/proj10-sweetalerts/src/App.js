import logo from './logo.svg';
import './App.css';
import Sweetalertdemo from './Component/Sweetalertdemo';
import React from 'react'; 
import MyAlert from './Component/MyAlert';


function App() {
  const str = 'abcd' + (new Date()).toString();
  return (
    <div className="App">
      {/* <Sweetalertdemo/> */}
      <h1>My Heading</h1>
      <MyAlert message={str}/>
    </div>
  );
}

export default App;
  