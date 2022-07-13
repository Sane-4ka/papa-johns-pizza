import React from 'react'
import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PizzaItem from './PizzaItem'

const PizzaList = () => {
    const [filteredGoods, setFilteredGoods] = useState([]);
    const {goods, goodsLoadingStatus} = useSelector(state => state.goods)
    const {activePizzaFilter} = useSelector(state => state.pizzaFilters)
    
    // const filterIt = () => {
    //     activePizzaFilter !== 'all' && [] ?
    //     setFilteredGoods(goods[0].goods.filter((item, i) => {
    //         return item.types.some(type => {
    //             return type.code === activePizzaFilter
    //         })
    //     })) : setFilteredGoods(goods[0].goods)
    // }
    const filterIt = () => {
        console.log(`filtered`)
        activePizzaFilter !== 'all' && [] ?
        setFilteredGoods(goods[0].goods.filter((item, i) => {
            return item.types.some(type => {
                return type.code === activePizzaFilter
            })
        })) : setFilteredGoods(goods[0].goods)
    }

    useEffect(() => {
        goods.length !== 0 ? filterIt() : console.log(`Waiting for the loading the goods`)
    }, [goods, activePizzaFilter]);

    // useMemo (() => {
    //     console.log(activePizzaFilter, filteredGoods, goodsLoadingStatus, 'Working use memo')
    //     if (goods.length === 0) {
    //         console.log('length 0')
    //         // return <h2>LOADINGggggg</h2>
    //     } else {
    //         filterIt()  
    //     }
    //  }, [activePizzaFilter, goods]);
    // useEffect(() => {
        
    // }, [activePizzaFilter, goods]);

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