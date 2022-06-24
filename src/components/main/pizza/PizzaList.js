import React from 'react'
import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BsPlus} from 'react-icons/bs'
import { useHttp } from '../../../hooks/useHttp'

import { goodsFetching, goodsFetchingError, goodsFetched } from '../../../redux/actions'
// import goods from '../../../redux/reducers/goods'

const PizzaList = ({goodsData}) => {
    const {goods, goodsLoadingStatus} = useSelector(state => state.goods)
    const {request} = useHttp();
    const dispatch = useDispatch();

    console.log(goods, goodsLoadingStatus)

    useEffect(() => {
        dispatch(goodsFetching)
        request('https://api.papajohns.by/catalog/goods?lang=ru&city_id=1')
            .then(data => dispatch(goodsFetched(data)))
            .catch(dispatch(goodsFetchingError))
    }, []);

    if (goodsLoadingStatus === 'loading') {
        return <h2>LOADING</h2>
    } else if (goodsLoadingStatus === 'error') {
        return <h2>LOADING FAILED</h2>
    }

    function renderItem(data) {
        if (data.length === 0) {
            return <h3>Goods not found</h3>
        }

        const items = data[0].goods.map((item, i) => {
            const {name, description, variations } = item
            return (
                <div className="pizza-block" key={i}>
                    <img src={variations[0].image_list} alt="" className="pizza-image" />
                    <hr/>
                    <h3 className="pizza-title">{name}</h3>
                    <div className="pizza-description">{description}</div>
                    <div className="pizza-filter">
                        <div className="pizza-filter-type">
                            <span className="filter-type-item">Traditional</span>
                        </div>
                        <div className="pizza-filter-size">
                            <span className="filter-size-item">30cm</span>
                            <span className="filter-size-item">20cm</span>
                            <span className="filter-size-item">10cm</span>
                        </div>
                        <div className="pizza-filter-board">
                            <BsPlus style={{fontSize: '22px'}}/>
                            <span>Pizza board 30cm</span>
                            <p className="pizza-filter-board-price">4.5 BYN</p>
                        </div>
                    </div>
                    <div className="pizza-footer">
                        <button className="pizza-footer-btn">Add to basket</button>
                        <span className="pizza-footer-price">{variations[0].price} BYN</span>
                    </div>
                </div>
            )
        })
        return (
            <>
            {items}
            </>
        )
    } 

    const elements = renderItem(goods);
    // const elements = useMemo(() => {
    //     // console.log(process)
    //     // if (process === 'loading') {
    //     //     return (
    //     //         <div>LOADING</div>
    //     //     )
    //     // }
    //     // else if (process === 'confirmed') {
    //     //     return renderItem(goodsData)
    //     // } 
    //     if (goodsData !== '') {
    //         return renderItem(goodsData)
    //     } else  {
    //         return (
    //             <div>LOADING</div>
    //         )
    //     } 
    // }, [goodsData])

    return (
        <div className="pizza">
            {elements}
        </div>
    )
}

export default PizzaList;