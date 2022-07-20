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
                {/* <a href="#" onClick={() => console.log(document.getElementById('Закуски'))} className="navbar_menu-link active"> */}
                <div onClick={() => document.getElementById('Закуски').scrollIntoView({block: "center", behavior: "smooth"})} className="navbar_menu-link active">
                    <img src={pizza} alt="" />
                    <span>Pizza</span>
                </div>
                <div href="#" className="navbar_menu-link">
                    <img src={bowl} alt="" />
                    <span>Hot</span>
                </div>
                <div href="#" className="navbar_menu-link">
                    <img src={snack} alt="" />
                    <span>Snacks</span>
                </div>
                <div href="#" className="navbar_menu-link">
                    <img src={drink} alt="" />
                    <span>Drinks</span>
                </div>
                <div href="#" className="navbar_menu-link">
                    <img src={sauce} alt="" />
                    <span>Sauces</span>
                </div>
                <div href="#" className="navbar_menu-link">
                    <img src={dessert} alt="" />
                    <span>Desserts</span>
                </div>
                <div href="#" className="navbar_menu-link">
                    <img src={combo} alt="" />
                    <span>Combo</span>
                </div>
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