import './App.css';
import Employee from "./components/Employee";
import {useState} from 'react';

function App() {
  console.log('we are about to list the employees'); // console helps interact with the web page. log used to print
  const showEmployee = true;
  const [role, setRole] = useState('dev');
  return (
    <div className="App">
      {console.log('we are about to list the employees')}
      {showEmployee ? (
        <>
          <input type='text' onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}/>
          <Employee name = "Garnet" role ="intern"></Employee>
          <Employee name = "Ruby" role={role}></Employee>
          <Employee name = "Red"></Employee>
          </>
       ): (
       <p>You cannot view employees</p>
       )}
    </div>
  );
}

export default App;
