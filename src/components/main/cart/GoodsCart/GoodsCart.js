import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";

import "./goodsCart.scss";

const GoodsCart = () => {
  const { productData, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const render = () =>
    Object.keys(productData).length === 0 ? (
      <>
        <img
          src="https://img.freepik.com/free-vector/empty-pizza-box-open-cardboard-pack-realistic-mockup_533410-564.jpg"
          alt=""
        />
        <div className="cart-description">
          <span>
            Корзина пуста. Выберите пиццу из меню или повторите предыдущий заказ
          </span>
        </div>
      </>
    ) : (
      <ul className="cart-items">
        {Object.values(productData).map((item, i) => (
          <CartItem dispatch={dispatch} key={`${item}_${i}`} itemData={item} />
        ))}
        <div className="cart-total" >
          <div className="total-price">Total price: {totalPrice}</div>
          <div className="cart-order-btn">Place an order</div>
        </div>
      </ul>
    );

  return (
    <div className="main-cart cart">
      <h3 className="cart-title">Cart</h3>
      <div className="cart-block">{render()}</div>
    </div>
  );
};

export default GoodsCart;
