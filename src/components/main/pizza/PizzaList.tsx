import React from 'react'
import { useEffect, useState } from 'react'

import PizzaSkeleton from '../../Skeleton/PizzaSkeleton'
import PizzaItem from './PizzaItem'
import { useAppSelector } from '../../../hooks'

type pizzaListProps = {
   dispatch: {}
}

const PizzaList: React.FC<pizzaListProps> = ({dispatch}) => {
    const [filteredGoods, setFilteredGoods] = useState<[]>([]);
    const {goods, status} = useAppSelector(state => state.goods)
    const {activePizzaFilter} = useAppSelector(state=> state.pizzaFilters)
    
    const filterIt = () => {
      //   activePizzaFilter !== 'all' ?
        ((goods.length>=1) && (activePizzaFilter !== 'all' ))?
        setFilteredGoods(goods[0]?.goods.filter((item: { types: { code: string }[] }) => {
            return item.types.some((type: { code: string }) => type.code === activePizzaFilter)
        })) : setFilteredGoods(goods[0]?.goods)
    }

    useEffect(() => {
        goods.length !== 0 && status === 'success' && filterIt()
        // goods.length !== 0 && goodsLoadingStatus === 'idle' && filterIt()
    }, [goods, activePizzaFilter]);

    const skeletons = [...new Array(9)].map((_, index) => <PizzaSkeleton key={index} />)
    
    function renderItem(data = goods) {
        return data.map((item: any) => <PizzaItem dispatch={dispatch} itemData={item} key={`${item.name}_X`} /> )
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