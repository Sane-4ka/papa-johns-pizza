import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'

import styles from './SmallCart.module.scss'
import {BsCart4} from 'react-icons/bs'
const SmallCart = () => {
    const {productData, totalPrice} = useSelector(state => state.cart)
  return (
    <Link to="/cart" className={styles.wrapper}>
        <div className={styles.icon}>
            <BsCart4/>
        </div>
        {
           Object.keys(productData).length === 0 && <span>Empty</span> 
        }
        <div className="count">{totalPrice}</div>
        <span>BYN</span>
    </Link>
  )
}
export default SmallCart