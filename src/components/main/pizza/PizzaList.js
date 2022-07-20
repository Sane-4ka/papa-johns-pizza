import React from 'react'
import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PizzaItem from './PizzaItem'

const PizzaList = ({dispatch}) => {
    const [filteredGoods, setFilteredGoods] = useState([]);
    const {goods, goodsLoadingStatus} = useSelector(state => state.goods)
    const {activePizzaFilter} = useSelector(state => state.pizzaFilters)
    
    const filterIt = () => {
        console.log(`filtered`, activePizzaFilter)
        activePizzaFilter !== 'all' ?
        setFilteredGoods(goods[0].goods.filter((item, i) => {
            return item.types.some(type => {
                return type.code === activePizzaFilter
            })
        })) : setFilteredGoods(goods[0].goods)
    }

    useEffect(() => {
        goods.length !== 0 ? filterIt() : console.log(`Waiting for the loading the goods`)
    }, [goods, activePizzaFilter]);

    if (goodsLoadingStatus === 'loading') {
        return <h2>GOODS LOADING</h2>
    } else if (goodsLoadingStatus === 'error') {
        return (
            <>
                <h2>Smth went wrong</h2>
                <button onClick={() => filterIt()}>reload</button>
            </>
        )
    }

    function renderItem(data = goods) {
        return data.map((item, i) => {
            return <PizzaItem dispatch={dispatch} itemData={item} key={`${item.name}_X`}/>
        })
    } 

    const elements = renderItem(filteredGoods) ;

    return (
        <div className="pizza">
            {elements}
        </div>
    )
}

export default PizzaList;