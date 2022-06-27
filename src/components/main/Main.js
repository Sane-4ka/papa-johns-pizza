import React from 'react'

import { useEffect, useState, useMemo } from 'react'
import { useHttp } from '../../hooks/useHttp'
import { goodsFetching, goodsFetchingError, goodsFetched } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

import PizzaList from './pizza/PizzaList'
import GoodsCart from './basket/GoodsCart'
import PizzaFilter from './filter/PizzaFilter'
import Navbar from './navbar/Navbar'
import './main.scss'

const Main = () => {
    // const [reload, setReload] = useState(false);
    const {request} = useHttp();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(goodsFetching)
        request('https://api.papajohns.by/catalog/goods?lang=ru&city_id=1')
            .then(data => dispatch(goodsFetched(data)))
            .catch(dispatch(goodsFetchingError))
    }, []);

  return (
    <div className='main'>
        <div className="main-block">
            <Navbar/>
        </div>
        <div className="filter-block">
            <h2 className="goods-title">Pizza</h2>
            <PizzaFilter/>    
        </div>
        <div className="main-container">
            <div className="main-goods">
                <PizzaList/>
            </div>
            <GoodsCart/>
        </div>
    </div>
  )
}

export default Main