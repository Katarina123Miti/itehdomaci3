//import logo from './logo.svg';
import './App.css';
import MainSection from './components/MainSection';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import React from 'react';
//import Home from './components/pages/Home';
import Locations from './components/pages/Locations';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
        path="/"
        element={<MainSection/>}
        />
      <Route path="/locations" element={<Locations />}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
