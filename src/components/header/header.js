import React from 'react'
import {GoTriangleDown} from 'react-icons/go'
import'./header.scss'
 
const Header = () => {
  return (
    <header className='header'>
        <div className="header-nav">
            <div className="nav-left">
                <div className="nav-left-logo">
                    <a href="#" className="logo-link">
                        <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/c/c4/Papa_John%27s_Pizza_logo.svg/1200px-Papa_John%27s_Pizza_logo.svg.png" alt="" />    
                    </a>
                </div>    
                <div className="nav-left-region">
                    <span>Minsk</span>
                    <GoTriangleDown style={{padding: '4px 0 0 0', margin: '0 0 0 4px'}}/>
                </div>
            </div>
            <div className="nav-right">
                <div className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#" className="nav-link active">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Sale</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Papa Bonus</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Contacts</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Phone: 777-77</a>
                        </li>
                    </ul>
                </div>  
                <button className='nav-btn'>
                    <span>Sign In</span>
                </button>  
                <div className="nav-lang">ru</div>  
            </div>
        </div>
        
    </header>
  )
}

export default Header