import React from 'react'
import { useState, useEffect } from 'react'

import './goodsCart.scss'

const GoodsCart = () => {
    const [cardData, setCardData] = useState([
        {
            name: 'Losyatina',
            img: 'https://api.papajohns.by//images/catalog/thumbs/cart/4f7d2aa1b096637accc570b001fe130b.jpg',
            description: 'Традиционное тесто, 23 см'
        },
        {
            name: 'Losyatina',
            img: 'https://api.papajohns.by//images/catalog/thumbs/cart/4f7d2aa1b096637accc570b001fe130b.jpg',
            description: 'Традиционное тесто, 23 см'
        }
    ])

    const render = () => {
        if (cardData === '') {
            return (
                <>
                    <img src="https://img.freepik.com/free-vector/empty-pizza-box-open-cardboard-pack-realistic-mockup_533410-564.jpg" alt="" />
                    <div className="cart-description">
                        <span>Корзина пуста. Выберите пиццу из меню или повторите предыдущий заказ</span>
                    </div>
                </>
            )
        } else {
            // console.log(cardData)
            const items = cardData.map((item, i)=> {
                return (
                    <li className="cart-item" key={`${i}_key`}>
                        <img src={item.img} alt="" className="cart-item-img" />
                        <div className="cart-item-text">
                            <h4 className="cart-item-title">{item.name}</h4>
                            <div className="cart-item-subtitle">{item.description}</div>
                        </div>
                    </li>
                )
            })
            return (
                <ul className="cart-items">
                    {items}
                </ul>
            )
        }
    }

  return (
    <div className='main-cart cart'>
        <h3 className="cart-title">Cart</h3>
        <div className="cart-block">
            {render()}
        </div>
        {/* <ul className="cart-items">
            <li className="cart-item">Drinks</li>
            <li className="cart-item">Sauces</li>
            <li className="cart-item">Pizza</li>
        </ul> */}
    </div>
  )
}

export default GoodsCart