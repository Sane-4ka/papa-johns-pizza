import React from 'react'

import { useEffect, useState, useMemo } from 'react'
import { useHttp } from '../../hooks/useHttp'

import PizzaList from './pizza/PizzaList'
import GoodsCart from './basket/GoodsCart'
import Filter from './filter/Filter'
import Navbar from './navbar/Navbar'
import './main.scss'

const Main = () => {
    const [goodsData, setGoodsData] = useState('');
    const {request} = useHttp();

    // useEffect(() => {
    //     request('https://api.papajohns.by/catalog/goods?lang=ru&city_id=1')  
    //         .then(onPizzaListLoaded)
    // }, []);
    // const onPizzaListLoaded = async(newGoodsData) => {
    //     await setGoodsData(newGoodsData);
    // }

  return (
    <div className='main'>
        <div className="main-block">
            <Navbar/>
        </div>
        <div className="filter-block">
            <h2 className="goods-title">Pizza</h2>
            <Filter/>    
        </div>
        <div className="main-container">
            <div className="main-goods">
                <PizzaList goodsData={goodsData}/>
            </div>
            <GoodsCart/>
        </div>
    </div>
  )
}

export default Main