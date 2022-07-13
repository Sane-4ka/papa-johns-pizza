import React from 'react'
import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import GoodsItem from './GoodsItem'

const GoodsList = () => {
    const {goods} = useSelector(state => state.goods)

    useEffect(() => {
        goods.length > 0 ? renderItem() : console.log(`Waiting for the loading the goods`)
    }, [goods]);
    
    function renderItem(data = goods) {
        if (goods.length > 0) {
            const goodsArr = [];
            for (let k = 1; k < 7; k++) {
                goodsArr.push({name : data[k].name})
                const items = data[k].goods.map((item, i) => {
                    
                    return <GoodsItem itemData={item} key={`${item.name}_X`}/>
                })
                goodsArr[k - 1].data = (items)
                // console.log(goodsArr[k - 1])
            }    
            return goodsArr.map(item => {
                return (
                    <div className='goods-block'>
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