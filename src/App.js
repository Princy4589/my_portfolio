import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { Switch } from 'react-router'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import PortFolio from './pages/PortFolio';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/competences" element={<Knowledges />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portFolio" element={<PortFolio />} />

          <Route element={<NotFound />} />

        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;