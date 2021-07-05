import logo from './logo.svg';
import './App.css';
import MyLabel from './MyLabel';
import MyLabelState from './MyLabelState';
import MyCompWillMount from './MyCompWillMount';
import MouseTracker from './component/MouseTracker';

function App() {
  const dte = new Date("2021","02","02");

  console.log(dte);
  return (
    <div className="App">
        <MyLabel/>
        <br/>
        <MyLabelState/>
        <br/>
        <MyCompWillMount/>
        <br/>
        <MouseTracker data={dte}/> 
    </div>
  );
}

export default App;
