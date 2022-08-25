import React, {useEffect} from 'react'

import { useHttp } from '../../hooks/useHttp'
import { useDispatch } from 'react-redux'
import { goodsFetching, goodsFetchingError, goodsFetched } from '../../redux/actions'

import Slider from './Slider/Slider';

import PizzaList from './pizza/PizzaList'
import GoodsCart from './cart/GoodsCart'
import GoodsList from './goods/GoodsList'
import PizzaFilter from './filter/PizzaFilter'
import Navbar from './navbar/Navbar'
import './main.scss'
// const PizzaFilter = React.lazy(() => import('./filter/PizzaFilter'));

const Main = () => {
    const {request} = useHttp();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(goodsFetching())
        request('https://api.papajohns.by/catalog/goods?lang=ru&city_id=1')
            .then(data => dispatch(goodsFetched(data)))
            .then(console.log(`fetched`))
            .catch(e => dispatch(goodsFetchingError(e)))
    }, []);

   return (
    <>
    <Slider/>
    <div className='main'>
        <div className="main-block">
            <Navbar/>
        </div>
        <GoodsCart dispatch={dispatch}/>
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
            {/* <GoodsCart/> */}
        </div>
    </div>
    </>
  )
}

export default Main