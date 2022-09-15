import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {CgMenuRight} from 'react-icons/cg'
import'./header.scss'
 

const Logo = () => {
    return (
        <div className="nav-left-logo">
            <Link to="/" className="logo-link">
                <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/c/c4/Papa_John%27s_Pizza_logo.svg/1200px-Papa_John%27s_Pizza_logo.svg.png" alt="" />    
            </Link>
        </div>    
    )
}
const Nav = () => {
    return (
        <div className="nav" >
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/sale" className="nav-link">Sale</Link>
                </li>
                <li className="nav-item">
                    <Link to="/papa-bonus" className="nav-link">Papa Bonus</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contacts" className="nav-link">Contacts</Link>
                </li>
                <li className="nav-item">
                    <a href='#' className="nav-link">Phone: 777-77</a>
                </li>
            </ul>
        </div>  
    )
}
const HeaderRight = () => {
    return (
        <div className="nav-right">
            <Nav/>
            <button className='nav-btn'>
                <span>Sign In</span>
            </button>  
            <div className="nav-lang">ru</div>  
        </div>
    )
}

const Header = () => {
    const [visible, setVisible] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const navRef = React.useRef();

    useEffect(() => {
        const isInclude = (e) => {
            if (!e.path.includes(navRef.current)) {
                setVisible(false)
            }
        }
        document.body.addEventListener('click', (e) => {isInclude(e)})
        window.addEventListener('resize', () => setWidth(window.innerWidth))

        return () => {
            document.body.removeEventListener('click', (e) => {isInclude(e)})
            window.removeEventListener('resize', () => setWidth(window.innerWidth))
        }
    }, []);

    const renderHeaderRightSmall = () => {
        return (
            <div className="header-menu-btn" ref={navRef}>
                <CgMenuRight size={30} onClick={() => setVisible(true)}/>
                {visible && <Nav/>}
            </div>
        )
    }
    
  return (
    <header className='header'>
        <div className="header-nav">
            <div className="nav-left">
                <Logo/>
            </div>
            {width < 900 ? renderHeaderRightSmall() : <HeaderRight/>}
        </div>
    </header>
  )
}

export default Header