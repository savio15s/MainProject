import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import MyAnotherButton from './components/MyAnotherButton';
import DataLoader from './components/DataLoader';

function App() {
  return (
    <div className="App">
        <MyButton></MyButton>
        <hr/>
        <MyAnotherButton/>
        <hr/>
        <DataLoader></DataLoader>
    </div>
  );
}

export default App;
