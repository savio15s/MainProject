import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/MyComponent';
import Call01 from './Components/err01/Call01';
//import Call02 from './Components/errboundary02-dontuse/Call02';
import Call03 from './Components/ErrorBoundary/Call03';

function App() {
  return (
    <div className="App">
      {/* <MyComponent/> */}
      <Call03/>
    </div> 
  );
}

export default App;
  