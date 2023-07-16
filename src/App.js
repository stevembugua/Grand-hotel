import React from 'react';
import Home from './components/landingPage/Home';
import { Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import About from './components/landingPage/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
