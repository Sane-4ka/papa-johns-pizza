import React from 'react'

// import { deleteItemFromCard } from '../../../../../redux/actions'
import styles from './CartPageItem.module.scss'

import { deleteItemFromCard, removeOne, addOneMore } from '../../../../../redux/slice/cartSlice'

const CartPageItem = ({dispatch, itemData}) => {
    // img
    // https://api.papajohns.by//images/catalog/thumbs/cart/
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
            <button className={styles.count_btn} disabled={itemData.count === 1} onClick={() => dispatch(removeOne(id))}><span>-</span></button>
            <div className="cart-count">{itemData.count}</div>
            <button className={styles.count_btn} onClick={() => dispatch(addOneMore(id))}><span>+</span></button>
        </div>
        <div className={styles.subtitle}>{price}<span> BYN</span></div>
        <div className={styles.delete_btn} onClick={() => dispatch(deleteItemFromCard(id))}></div>
    </li>
  )
}

export default CartPageItem