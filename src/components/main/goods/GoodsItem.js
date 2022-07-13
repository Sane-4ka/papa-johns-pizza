import React from 'react'

const GoodsItem = ({itemData}) => {
    const {name, description, variations} = itemData
    // console.log(variations, `data`)
   return (
    <div className="pizza-block">
        <img src={variations[0].image_list} alt="" className="pizza-image" />
        <hr/>
        <h3 className="pizza-title">{name}</h3>
        <div className="pizza-description">{description}</div>
        <div className="pizza-footer">
            <button className="pizza-footer-btn">Add to basket</button>
            <span className="pizza-footer-price">{variations[0].price} BYN</span>
        </div>
    </div>
)
}

export default GoodsItem