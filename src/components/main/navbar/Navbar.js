import React from 'react'

import pizza from '../../../assets/img/pizza.svg'
import bowl from '../../../assets/img/hot-soup.png'
import snack from '../../../assets/img/snack.png'
import drink from '../../../assets/img/drink.png'
import sauce from '../../../assets/img/sauces.png'
import dessert from '../../../assets/img/sweets.png'
import combo from '../../../assets/img/delivery.png'

import './navbar.scss'

const Navbar = () => {
  return (
    <div className="main-navbar_menu navbar_menu">
        <ul className="navbar_menu-food">
            <li className="navbar_menu-item">
                <a href="#" className="navbar_menu-link active">
                    <img src={pizza} alt="" />
                    <span>Pizza</span>
                </a>
                <a href="#" className="navbar_menu-link">
                    <img src={bowl} alt="" />
                    <span>Hot</span>
                </a>
                <a href="#" className="navbar_menu-link">
                    <img src={snack} alt="" />
                    <span>Snacks</span>
                </a>
                <a href="#" className="navbar_menu-link">
                    <img src={drink} alt="" />
                    <span>Drinks</span>
                </a>
                <a href="#" className="navbar_menu-link">
                    <img src={sauce} alt="" />
                    <span>Sauces</span>
                </a>
                <a href="#" className="navbar_menu-link">
                    <img src={dessert} alt="" />
                    <span>Desserts</span>
                </a>
                <a href="#" className="navbar_menu-link">
                    <img src={combo} alt="" />
                    <span>Combo</span>
                </a>
            </li>
        </ul>
        <div className="navbar-ingredients">
            <span>Better ingredients, <br/>better pizza</span>
            <img src="https://cdn-icons-png.flaticon.com/512/601/601939.png" alt="" />
        </div>
    </div>
  )
}

export default Navbar