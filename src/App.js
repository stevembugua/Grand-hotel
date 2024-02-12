import React from 'react';
import Home from './components/landingPage/Home';
import { Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import About from './components/landingPage/About';
import Dining from './components/landingPage/Dining';
import Accomodation from './components/landingPage/Accomodation';
import Facilities from './components/landingPage/Facilities';
import Contact from './components/landingPage/Contact';
import FormReservation from './components/landingPage/Form';
import { Helmet } from 'react-helmet'

function App() {
  return (
    <div className="App">
        <Helmet>
          <title>The Grand Caesar</title>
        </Helmet>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/dining' element={<Dining />} />
        <Route path='/accomodation' element={<Accomodation />} />
        <Route path="/facilities&amenities" element={<Facilities />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/FormReservation' element={<FormReservation />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
