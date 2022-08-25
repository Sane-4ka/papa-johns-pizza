import React from 'react'
import { addItemToCard } from '../../../redux/actions'

const GoodsItem = ({itemData, dispatch}) => {
    const {name, description, variations, id} = itemData
   return (
    <div className="pizza-block">
        <img src={variations[0].image_list} alt="" className="pizza-image" />
        <hr/>
        <h3 className="pizza-title">{name}</h3>
        <div className="pizza-description">{description}</div>
        <div className="pizza-footer">
            <button className="pizza-footer-btn" onClick={() => dispatch(addItemToCard({currentVariation: variations[0], id, name}))}>Add to basket</button>
            <span className="pizza-footer-price">{variations[0].price} BYN</span>
        </div>
    </div>
)
}

export default GoodsItem