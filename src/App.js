import React from 'react';
import {Route, Routes} from 'react-router-dom'

import Header from './components/header/header';

import Home from './pages/Home';
import Sale from "./pages/Sale";
import Contacts from './pages/Contacts'
import PapaBonus from './pages/PapaBonus'
import Footer from './components/footer/Footer'

import './App.css';

function App() {

  return (
    <div className="App">
        <div className="app-container">
            <Header/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/sale" element={<Sale />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/papa-bonus" element={<PapaBonus />} />
                </Routes>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
