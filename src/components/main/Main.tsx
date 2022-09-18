import React, {useEffect, Suspense} from 'react'

import { useDispatch } from 'react-redux'
import {TbArrowBigTop} from 'react-icons/tb'

import Slider from './Slider/Slider';
import SmallCart from './cart/SmallCart/SmallCart';
// import PizzaList from './pizza/PizzaList'
import GoodsCart from './cart/GoodsCart/GoodsCart'
// import GoodsList from './goods/GoodsList'
import PizzaFilter from './filter/PizzaFilter'
import Navbar from './navbar/Navbar'
import './main.scss'
import { useState } from 'react';

import {useSelector} from 'react-redux'
import { fetchGoodsByUrl, goodsFetched } from '../../redux/slice/goodsSlice'
// const PizzaFilter = React.lazy(() => import('./filter/PizzaFilter'));
const PizzaList = React.lazy(() => import("./pizza/PizzaList"));
const GoodsList = React.lazy(() => import("./goods/GoodsList"));

const Main = () => {
    const [winWidth, setWinWidth] = useState(window.innerWidth);
    const dispatch = useDispatch();
    const goods = useSelector(state => state.goods.goods)

    useEffect(() => {
        if (goods.length === 0) {
            dispatch(fetchGoodsByUrl('https://api.papajohns.ru/catalog/goods?lang=ru&city_id=1'))
            .then(data => dispatch(goodsFetched(data.payload)))
        }
        window.addEventListener('resize', () => setWinWidth(window.screen.width))
        return () => {
            window.removeEventListener('resize', () => setWinWidth(window.screen.width))
        }
    }, []);

    const onTop = function() { 
        if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) { 
           window.scrollTo(0, 0)
        } 
     } 
    return (
    <>
    <Slider/>
    <div className='main'>
        <div className="main-block">
            <Navbar/>
        </div>
        {winWidth<1185?<SmallCart/> : <GoodsCart dispatch={dispatch}/>}
            <div className="filter-block">
                <h2 className="goods-title" id='pizzas'>Пиццы</h2>
                <PizzaFilter/>    
            </div>
        
        <div className="main-container">
            <div className="main-goods">
                    <PizzaList dispatch={dispatch}/>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <GoodsList dispatch={dispatch}/>
                </Suspense> 
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