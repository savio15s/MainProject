import logo from './logo.svg';
import './App.css';
import CustomerReg from './components/CustomerReg';
import SimpleForm from './Usethis/SimpleForm';
import FormikForm from './Usethis/FormikForm';

function App() {
  let color = "blue";
  return (
    <div className="App">
      <CustomerReg color={color}/>
      <hr/>
      {/* <SimpleForm/> */}
      <FormikForm/>
    </div>
  );
}

export default App;
