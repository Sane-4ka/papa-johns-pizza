import React from 'react'

import { deleteItemFromCard } from '../../../../../redux/actions'
import styles from './CartPageItem.module.scss'

const CartPageItem = ({dispatch, itemData}) => {
    // img
    // https://api.papajohns.by//images/catalog/thumbs/cart/
    console.log(itemData)
    const {price, dough, diameter, image_list, id} = itemData.variation
    // const {productData} = useSelector(state => state.cart)

  return (
    <li className={styles.item}>
        <div className={styles.block}>
            <img src={image_list} alt="" className="img" />
            <div className="cross-btn" onClick={() => dispatch(deleteItemFromCard(id))}></div>
            <div className={styles.text}>
                <h4 className="title">{itemData.name}</h4>
                {dough ? 
                <div className={styles.subtitle_text}>{`${dough}, ${diameter}`}</div>
                : diameter ? 
                <div className={styles.subtitle_text}>{`${diameter}`}</div> : null}
            </div>    
        </div>
        <div className={styles.count}>
            {/* <div className="count-text">Count</div> */}
            <div className={styles.count_btn}><span>+</span></div>
            <div className="cart-count">{itemData.count}</div>
            <div className={styles.count_btn}><span>-</span></div>
        </div>
        <div className={styles.subtitle}>{price}<span> BYN</span></div>
        <div className={styles.delete_btn} onClick={() => dispatch(deleteItemFromCard(id))}></div>
    </li>
  )
}

export default CartPageItem