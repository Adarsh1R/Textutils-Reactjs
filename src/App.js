
//import About from './About';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './Alert';
import About from './About';
import {
  
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const [alert,setAlert] = useState(null)

  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1500);

  }
  const toggleMode= ()=>{
    if(mode=='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("Darkmode has been enabled", "success")
      document.title="Text Converter -Dark mode"
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Lightmode has been enabled", "success")
    document.title="Text Converter -Light mode"
  }
}


   
  return (
    <>
    <BrowserRouter>
   {/*<Navbar title="First App" aboutText="About us" />*/}

   <Navbar title="First App" mode={mode} toggleMode={toggleMode} aboutText="About "/>
   <Alert alert={alert}/>



   <div className="container my-3">
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/home' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
      <Route path='/title' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
    </Routes>

   
   
  

   </div>
   </BrowserRouter>

  
    </>

  );
}

export default App;
