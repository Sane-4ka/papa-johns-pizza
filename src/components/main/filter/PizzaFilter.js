import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BsFilterCircle} from 'react-icons/bs'
import './pizzaFilter.scss'
import { useEffect } from 'react'
import {activePizzaFilterChanged} from '../../../redux/slice/filterSlice'

const PizzaFilter = () => {
    // const {activePizzaFilter} = useSelector(state => state.pizzaFilters)
    const dispatch = useDispatch();

    const filterData = [
        {name: 'New', code: 'new'}, 
        {name: 'Vegans', code: 'veggie'}, 
        {name: 'With meat', code: 'with_meat'}, 
        {name: 'With mushrooms', code: 'with_mushrooms'}, 
        {name: 'Bestseller', code: 'bestseller'}, 
        {name: 'Ranch sauce', code: 'ranch_sauce'}, 
        {name: 'Spicy', code: 'spice'}, 
        {name: 'BBQ Sauce', code: 'bbq_sauce'}, 
    ]

    useEffect(() => {
        dispatch(activePizzaFilterChanged('all'))
    }, []);

    const removeActive = (elem) => {
        elem.forEach(btn => {
            btn.classList.remove('active')
        })
    }

    const setActiveFilter = (attr) => {
        const btns = document.querySelectorAll('.filter-block-button');
        if (attr.classList.contains('active')) {
            removeActive(btns)
        } else {
            removeActive(btns)
            attr.classList.add('active')
        }
        dispatch(activePizzaFilterChanged(attr.getAttribute('data-sort')))
    }

    const renderBtns = () => {
        return filterData.map((item, i) => {
            return (
                <div key={`${item.name}_${i}`}>
                <button onClick={(e) => setActiveFilter(e.target)} data-sort={item.code} className="filter-block-button">{item.name}</button>
                </div>
            )
        })
    }

  return (
    <div className='filter'>
        <div className="filter-block-buttons">
            {renderBtns()}
        </div>
        <div className="filter-block-icon">
            <div className="filter-icon">
                <BsFilterCircle size={35}/>
            </div>
        </div>
    </div>
  )
}

export default PizzaFilter