import React, {useState} from 'react'

import pizza from '../../../assets/img/pizza.svg'
import bowl from '../../../assets/img/hot-soup.png'
import snack from '../../../assets/img/snack.png'
import drink from '../../../assets/img/drink.png'
import sauce from '../../../assets/img/sauces.png'
import dessert from '../../../assets/img/sweets.png'
import combo from '../../../assets/img/delivery.png'

import './navbar.scss'

const data = [
        {
            name: 'Pizza',
            imgSrc: pizza,
            id: 'pizzas'
        },
        {
            name: 'Hot',
            imgSrc: bowl,
            id: 'Горячее'
        },
        {
            name: 'Snacks',
            imgSrc: snack,
            id: 'Закуски'
        },
        {
            name: 'Drinks',
            imgSrc: drink,
            id: 'Напитки'
        },
        {
            name: 'Sauces',
            imgSrc: sauce,
            id: 'Соусы'
        },
        {
            name: 'Desserts',
            imgSrc: dessert,
            id: 'Десерты'
        },
        {
            name: 'Combo',
            imgSrc: combo,
            id: 'Комбо'
        },
    ]

const Navbar = () => {
    // const [active, setActive] = useState('Pizza')

    const handleActive = (item) => {
        // setActive(item.name)
        document.getElementById(item.id).scrollIntoView({block: "center", behavior: "smooth"})
    }

    const elements = data.map((item, i) => {
        return (
            <div key={`${item.name}-${i}`} onClick={() => handleActive(item)} className={'navbar_menu-link'}>
                <img src={item.imgSrc} alt="" />
                <span>{item.name}</span>
            </div>
        )
    })
  return (
    <div className="main-navbar_menu navbar_menu">
        <ul className="navbar_menu-food">
            <li className="navbar_menu-item">
                {elements}
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