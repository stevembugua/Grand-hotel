import React from 'react';
import Home from './components/landingPage/Home';
import { Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
