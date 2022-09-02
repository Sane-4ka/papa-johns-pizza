import React, {useEffect} from 'react'

import { useHttp } from '../../hooks/useHttp'
import { useDispatch } from 'react-redux'
import { goodsFetching, goodsFetchingError, goodsFetched } from '../../redux/actions'

import {TbArrowBigTop} from 'react-icons/tb'

import Slider from './Slider/Slider';
import SmallCart from './cart/SmallCart/SmallCart';
import PizzaList from './pizza/PizzaList'
import GoodsCart from './cart/GoodsCart/GoodsCart'
import GoodsList from './goods/GoodsList'
import PizzaFilter from './filter/PizzaFilter'
import Navbar from './navbar/Navbar'
import './main.scss'
import { useState } from 'react';
// const PizzaFilter = React.lazy(() => import('./filter/PizzaFilter'));

const Main = () => {
    const [winWidth, setWinWidth] = useState(window.innerWidth);
    const {request} = useHttp();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(goodsFetching())
        request('https://api.papajohns.by/catalog/goods?lang=ru&city_id=1')
            .then(data => dispatch(goodsFetched(data)))
            .then(console.log(`fetched`))
            .catch(e => dispatch(goodsFetchingError(e)))
        window.addEventListener('resize', () => setWinWidth(window.screen.width))
        return () => {
            window.removeEventListener('resize', () => setWinWidth(window.screen.width))
        }
    }, []);
    const onTop = function() { 
        if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) { 
           window.scrollBy(0,-50); 
           setTimeout(onTop, 5); 
        } 
     } 
    return (
    <>
    <Slider/>
    <div className='main'>
        <div className="main-block">
            <Navbar/>
        </div>
        {winWidth<1170?<SmallCart/> :<GoodsCart dispatch={dispatch}/>}
        {/* <Suspense fallback={<div>Загрузка...</div>}> */}
            <div className="filter-block">
                <h2 className="goods-title" id='pizzas'>Пиццы</h2>
                <PizzaFilter/>    
            </div>
        {/* </Suspense> */}
        <div className="main-container">
            <div className="main-goods">
                <PizzaList dispatch={dispatch}/>
                <GoodsList dispatch={dispatch}/>
            </div>
        </div>
    </div>
    <div className="arrow-up" onClick={() => onTop()}>
        <TbArrowBigTop color='rgb(42, 73, 64)' size={35}/>
    </div>
    </>
  )
}

export default Main