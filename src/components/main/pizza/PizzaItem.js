import React, {useState, useEffect} from 'react'
// import {BsPlus} from 'react-icons/bs'
// import { addItemToCard } from '../../../redux/actions';
import { addItemToCard } from '../../../redux/slice/cartSlice';

const PizzaItem = ({dispatch, itemData}) => {
    const [size, setSize] = useState([]);
    const [currentType, setCurrentType] = useState('Традиционное')
            // arr with size ids
    const [currentId, setCurrentId] = useState(0)
        // arr with variation ids
    const [variationIds, setVariationIds] = useState([])
    const {name, description, variations} = itemData
    const iDid = itemData.id

    useEffect(() => {
        setType()
    }, []);

    const setType = (value = currentType) => {
        
        setCurrentType(value)
        onChangeSizeId()
        setSize([])
        setVariationIds([])
        setCurrentId(0)
        variations.forEach((item, i) => {
            if (item.stuffed_crust === 'none' && item.dough === value) {
                setSize(size => [...size, item.size.value])
                setVariationIds(state => [...state, i])
            }
        })
    }
    const onChangeSizeId = (i = currentId) => {
        setCurrentId(i)
    }

    const renderSizes = () => {
        return (size.map((size, i) => {
            // return !size ? <span>Данного вида нет в продаже</span> :
            return <span key={`${name}_${i}`} onClick={() => setCurrentId(i)} className={i === currentId ? `filter-size-item active` : 'filter-size-item' }>{size}cm</span>
        }))
    }

    const onAddToCart = (currentVariation) => {
        console.log({currentVariation, iDid})
        const {id , price, image_list, diameter, dough} = currentVariation
        dispatch(addItemToCard({id, price, image_list, diameter, dough, name, iDid}))
    }

    const makeContent = () => {
        let varId = variations[variationIds[currentId]]
        return varId?.kind.id?
        // console.log(!!varId?.kind.id)
         (
        <div className="pizza-block">
            <div className="pizza-block-img">
                <img src={varId?.image_list} alt="" className="pizza-image" />
            </div>
            <hr/>
            <h3 className="pizza-title">{name}</h3>
            <div className="pizza-description">{description}</div>
            <div className="pizza-filter">
                <div className="pizza-filter-size">
                    <div className={currentType === 'Традиционное' ? `filter-size-item active` : 'filter-size-item'} 
                        data-type='Традиционное' 
                        onClick={(e) => setType(e.target.getAttribute('data-type'))}
                        >Традиционное
                    </div>
                    <div className={currentType === 'Тонкое'? `filter-size-item active` : 'filter-size-item'} 
                        data-type='Тонкое' 
                        onClick={(e) => setType(e.target.getAttribute('data-type'))}
                        >Тонкое
                    </div>
                </div>
                <div className="pizza-filter-size">
                    {renderSizes()}
                </div>
                {/* <div className="pizza-filter-board">
                    <BsPlus style={{fontSize: '22px'}}/>
                    <span>Crispy board 30cm</span>
                    <p className="pizza-filter-board-price">4.5 BYN</p>
                </div> */}
            </div>
            <div className="pizza-footer">
                <button className="pizza-footer-btn" onClick={() => onAddToCart(varId)}>Add to basket</button>
                <span className="pizza-footer-price">{varId? varId.price : null} BYN</span>
            </div>
        </div>
        ) : null
    }

    const elements = makeContent()
    
   return (
        <React.Fragment>
        {elements}
        </React.Fragment>
    )
}

export default PizzaItem