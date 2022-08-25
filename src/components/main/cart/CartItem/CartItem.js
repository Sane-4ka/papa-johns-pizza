import React from 'react'
import { useSelector } from 'react-redux'
import { deleteItemFromCard } from '../../../../redux/actions'

const CartItem = ({itemData, dispatch}) => {
    console.log(itemData)
    const {price, dough, diameter, image_list, id} = itemData.variation
    // const {productData} = useSelector(state => state.cart)

  return (
    <li className="cart-item">
        <div className="cart-item-block">
            <img src={image_list} alt="" className="cart-item-img" />
            <div className="cart-item-cross-btn" onClick={() => dispatch(deleteItemFromCard(id))}></div>
            <div className="cart-item-text">
                <h4 className="cart-item-title">{itemData.name}</h4>
                {dough ? 
                <div className="cart-item-subtitle">{`${dough}, ${diameter}`}</div>
                : diameter ? 
                <div className="cart-item-subtitle">{`${diameter}`}</div> : null}
                
                <div className="cart-item-subtitle">{`Price: ${price}`}</div>
            </div>    
        </div>
        <div className="cart-item-count count">
            <div className="count-text">Count</div>
            <div className="count-add count-btn">+</div>
            <div className="cart-count">{itemData.count}</div>
            <div className="count-remove count-btn">-</div>
        </div>
    </li>
  )
}

export default CartItem