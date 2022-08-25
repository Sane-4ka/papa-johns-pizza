import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem/CartItem'

import './goodsCart.scss'

const GoodsCart = ({dispatch}) => {
    const {productData, totalPrice} = useSelector(state => state.cart)
    const render = () => {
        if (Object.keys(productData).length === 0) {
            return (
                <>
                    <img src="https://img.freepik.com/free-vector/empty-pizza-box-open-cardboard-pack-realistic-mockup_533410-564.jpg" alt="" />
                    <div className="cart-description">
                        <span>Корзина пуста. Выберите пиццу из меню или повторите предыдущий заказ</span>
                    </div>
                </>
            )
        } else {
            const itemsData = Object.values(productData)
            const items = itemsData.map((item, i)=> {
                return (
                    <CartItem dispatch={dispatch} key={`${item}_${i}`} itemData={item}/>
                )
            })
            return (
                <ul className="cart-items">
                    {items}
                    <div className="cart-total">
                        <div className="total-price">Total price: {totalPrice}</div>
                        <div className="cart-order-btn">Place an order</div>
                    </div>
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
    </div>
  )
}

export default GoodsCart