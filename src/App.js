
import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
function App() {
  const [type,setType]=useState("login");
  return (
    <>
   
    <div >
      {
        type=="login" ?<Login setType={setType}/>:<Register setType={setType}/>
      }
    </div>
    </>
  );
}

export default App;
