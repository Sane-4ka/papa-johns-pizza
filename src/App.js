import React from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/Main';
import Slider from './components/header/Slider/Slider';


function App() {

  return (
    <div className="App">
        <div className="app-container">
            <Header/>
            <Slider/>
            <Main/>    
        </div>
    </div>
  );
}

export default App;
