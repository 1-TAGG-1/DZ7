import Header from './Header/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import About from './About/About';
import Contact from './Contact/Contact';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
