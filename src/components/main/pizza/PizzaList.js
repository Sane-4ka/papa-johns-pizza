import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import PizzaSkeleton from '../../Skeleton/PizzaSkeleton'
import PizzaItem from './PizzaItem'

const PizzaList = ({dispatch}) => {
    const [filteredGoods, setFilteredGoods] = useState([]);
    const {goods, goodsLoadingStatus, status} = useSelector(state => state.goods)
    const {activePizzaFilter} = useSelector(state => state.pizzaFilters)
    
    const filterIt = () => {
        activePizzaFilter !== 'all' ?
        setFilteredGoods(goods[0]?.goods.filter((item, i) => {
            return item.types.some(type => type.code === activePizzaFilter)
        })) : setFilteredGoods(goods[0]?.goods)
    }

    useEffect(() => {
        goods.length !== 0 && status === 'success' && filterIt()
        // goods.length !== 0 && goodsLoadingStatus === 'idle' && filterIt()
    }, [goods, activePizzaFilter]);

    const skeletons = [...new Array(9)].map((_, index) => <PizzaSkeleton key={index} />)
    
    function renderItem(data = goods) {
        return data.map((item, i) => <PizzaItem dispatch={dispatch} itemData={item} key={`${item.name}_X`} /> )
    } 
    

    if (status === 'error') {
        return (
            <h2>Smth went wrong</h2>
        )
    }

    return (
        <div className="pizza">
            {status === 'success'? renderItem(filteredGoods): skeletons}
        </div>
    )
}

export default PizzaList;