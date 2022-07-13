import React from 'react'
import {BsPlus} from 'react-icons/bs'

const PizzaItem = ({itemData}) => {
    const {name, description, variations} = itemData
   return (
    <div className="pizza-block">
        <img src={variations[0].image_list} alt="" className="pizza-image" />
        <hr/>
        <h3 className="pizza-title">{name}</h3>
        <div className="pizza-description">{description}</div>
        <div className="pizza-filter">
            <div className="pizza-filter-size">
                <span className="filter-size-item active">Traditional</span>
                <span className="filter-size-item">Thin</span>
            </div>
            <div className="pizza-filter-size">
                <span className="filter-size-item active">30cm</span>
                <span className="filter-size-item">20cm</span>
                <span className="filter-size-item">10cm</span>
                <span className="filter-size-item">10cm</span>
            </div>
            <div className="pizza-filter-board">
                <BsPlus style={{fontSize: '22px'}}/>
                <span>Crispy board 30cm</span>
                <p className="pizza-filter-board-price">4.5 BYN</p>
            </div>
        </div>
        <div className="pizza-footer">
            <button className="pizza-footer-btn">Add to basket</button>
            <span className="pizza-footer-price">{variations[0].price} BYN</span>
        </div>
    </div>
)
}

export default PizzaItem