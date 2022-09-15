import React from 'react'
import { useEffect} from 'react'
import {useSelector } from 'react-redux'

import GoodsItem from './GoodsItem'

const GoodsList = ({dispatch}) => {
    const goods = useSelector(state => state.goods.goods)

    useEffect(() => {
        goods.length > 0 && renderItem()
    }, [goods]);
    
    function renderItem(data = goods) {
        if (goods.length > 0) {

            const goodsArr = [];
            for (let k = 1; k < 7; k++) {
                goodsArr.push({name : data[k].name})
                const items = data[k].goods.map((item, i) => {
                    
                    return <GoodsItem dispatch={dispatch} itemData={item} key={`${item.name}_X`}/>
                })
                goodsArr[k - 1].data = (items)
                // console.log(goodsArr[k - 1])
            }    
            return goodsArr.map((item, i) => {
                return (
                    <div className='goods-block' id={item.name} key={`${item.name}_${i}`}>
                        <h2>{item.name}</h2>
                        <div className="goods-container">
                        {
                            item.data.map(product => {
                                return product
                            })
                        }
                        </div>
                    </div>
                )
            })
        } else {
            return
        }
    } 
    
    const elements = renderItem(goods) ;

    return (
        <div className="goods">
            {elements}
        </div>
    )
}

export default GoodsList;