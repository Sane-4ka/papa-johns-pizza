import React from 'react';

import Header from './components/header/header';
import Main from './components/main/Main';
import Slider from './components/header/Slider/Slider';
import './App.css';
import GoodsCart from './components/main/cart/GoodsCart';

function App() {

  return (
    <div className="App">
        <div className="app-container">
            <Header/>
            <Slider/>
            {/* <GoodsCart/> */}
            <Main/>    
        </div>
    </div>
  );
}

export default App;
