import React from 'react'

import { useSelector, useDispatch } from 'react-redux/es/exports'

import CartPageItem from './cartPageItem/CartPageItem';
import styles from './CartPage.module.scss'

const CartPage = () => {
    const dispatch = useDispatch();
    const {productData, totalPrice} = useSelector(state => state.cart)

    const itemsData = Object.values(productData)
        const items = itemsData.map((item, i)=> {
            console.log(item)
            return <CartPageItem dispatch={dispatch} key={`${item}_${i}`} itemData={item}/>
        })
        return (
            <>
            <h2>Cart</h2>
            <ul className={styles.cart}>
                {items}
                <div className={styles.total}>
                    <div className={styles.price}>Total price: {totalPrice}</div>
                    <div className={styles.order_btn}>Make an order</div>
                </div>
            </ul>
            </>
        )
    return (
        <h2>Cart</h2>
    )
}

export default CartPage