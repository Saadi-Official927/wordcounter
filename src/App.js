import './App.css';
import Navbar from './coponents/Navbar';
import Alert from './coponents/Alert';
import About from './coponents/About';
import TextForms from './coponents/TextForms';
import { useState } from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link, 
} from "react-router-dom";
import Footer from './coponents/Footer';


function App(props) {

    const [showAlert, setShowAlert] =  useState(null);

    const alert = (message, type) => {
      setShowAlert({
      msg: message,
      type: type,
      });
      setTimeout(() => {
        setShowAlert(null);
      }, 2000);
    }
    

  return (
    <>
      <Router>
        <Navbar />
        <Alert alert = {showAlert} />
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<TextForms alert= {showAlert}/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
