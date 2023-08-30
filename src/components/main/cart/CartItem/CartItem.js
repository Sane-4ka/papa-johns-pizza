import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemFromCard,
  addOneMore,
  removeOne,
} from "../../../../redux/slice/cartSlice";

const CartItem = React.memo(({ itemData }) => {
  const { price, dough, diameter, image_list, id } = itemData.variation;
  const dispatch = useDispatch();
  console.log('render')
  // const {productData} = useSelector(state => state.cart)
  return (
    <li className="cart-item">
      <div className="cart-item-block">
        <img src={image_list} alt="" className="cart-item-img" />
        <div
          className="cart-item-cross-btn"
          onClick={() => dispatch(deleteItemFromCard(id))}
        ></div>
        <div className="cart-item-text">
          <h4 className="cart-item-title">{itemData.name}</h4>
          {dough ? (
            <div className="cart-item-subtitle">{`${dough}, ${diameter}`}</div>
          ) : diameter ? (
            <div className="cart-item-subtitle">{`${diameter}`}</div>
          ) : null}

          <div className="cart-item-subtitle price">{`Price: ${price}`}</div>
        </div>
      </div>
      <div className="cart-item-count count">
        <div className="count-text">Count</div>
        <button
          className="count-add count-btn"
          onClick={() => dispatch(addOneMore(id))}
        >
          +
        </button>
        <div className="cart-count">{itemData.count}</div>
        <button
          className="count-remove count-btn"
          disabled={itemData.count === 1}
          onClick={() => dispatch(removeOne(id))}
        >
          -
        </button>
      </div>
    </li>
  );
});

export default CartItem;
