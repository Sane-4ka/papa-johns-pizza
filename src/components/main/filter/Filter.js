import React from 'react'

import './filter.scss'
import {BsFilterCircle} from 'react-icons/bs'

const Filter = () => {
  return (
    <div className='filter'>
        <div className="filter-block-buttons">
            <button data-sort='new' className="active filter-block-button">New</button>
            <button data-sort='vegans' className="filter-block-button">Vegans</button>
            <button data-sort='with-meat' className="filter-block-button">With meat</button>
            <button data-sort='with-mushrooms' className="filter-block-button">With mushrooms</button>
        </div>
        <div className="filter-block-icon">
            <div className="filter-icon">
                <BsFilterCircle size={35}/>
            </div>
        </div>
    </div>
  )
}

export default Filter