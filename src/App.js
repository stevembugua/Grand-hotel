import React from 'react';
import Home from './components/landingPage/Home';
import { Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import About from './components/landingPage/About';
import Dining from './components/landingPage/Dining';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route path='/dining' element={<Dining />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
