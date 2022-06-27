import React from 'react'
import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import PizzaItem from './PizzaItem'

const PizzaList = () => {
    const [reload, setReload] = useState(false);
    const [filteredGoods, setFilteredGoods] = useState([]);
    const {goods, goodsLoadingStatus} = useSelector(state => state.goods)
    const {activePizzaFilter} = useSelector(state => state.pizzaFilters)

    useEffect(() => {
        // console.log(goods)
        if (goods.length === 0) {
            return
        } else {
            filterIt()  
        }
        // console.log(filteredGoods, goodsLoadingStatus)
     }, [activePizzaFilter, goods]);

    if (goodsLoadingStatus === 'loading') {
        return <h2>LOADING</h2>
    } else if (goodsLoadingStatus === 'error') {
        return <h2>LOADING FAILED</h2>
    }
    
    const filterIt = () => {
        activePizzaFilter !== 'all' && [] ?
        setFilteredGoods(goods[0].goods.filter((item, i) => {
            return item.types.some(type => {
                return type.code === activePizzaFilter
            })
        })) : setFilteredGoods(goods[0].goods)
    }

    function renderItem(data = goods) {
        if (goods === []) {
            return
        }
        if (data.length === 0) {
            return (
                <>
                    <h3>Goods not found</h3>
                    <button onClick={() => setReload(!reload)}>reload</button>
                </>
                )
        }
        const items = data.map((item, i) => {
            return <PizzaItem itemData={item} key={`${item.name}_X`}/>
        })
        return (
            <>
            {items}
            </>
        )
    } 

    const elements = renderItem(filteredGoods) ;

    return (
        <div className="pizza">
            {elements}
        </div>
    )
}

export default PizzaList;