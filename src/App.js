// import logo from './logo.svg';

import { useState } from 'react';
import './App.css';
import React from 'react';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar  from './components/Navbar';
import Textform  from './components/Textform';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [alert, setAlert]=useState()
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type}
    )
  }
  const [mode, setMode]= useState('light')
  // const [Cmd, setCmd]= useState('enable darkmode')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#374f4e'
      showAlert("darkmode enabled", "sucsess");
    }
    else
    {setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("lightmode enabled", "sucsess");}
  }
 
 
  return (
   <>
      {/* <Router> */}
<Navbar title="updated" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
 <div className="container my-3"> 
 {/* <Routes>
              <Route path="/about" element={<About />}/>
              <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below:" mode={mode} />}/>
              
        </Routes>   */}
        <Textform showAlert={showAlert} heading="Enter the text to analyze below:" mode={mode} />
        </div>
       {/* </Router>    */}
</>
  );

}
export default App;
