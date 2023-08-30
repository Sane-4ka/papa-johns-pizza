import React from "react";
import { useDispatch } from "react-redux";
// import { addItemToCard } from '../../../redux/actions'
import { addItemToCard } from "../../../redux/slice/cartSlice";

const GoodsItem = ({ itemData }) => {
  // itemData - data for each current item
  //*  contents:   it, category, types, variations and etc

  const dispatch = useDispatch();
  const { name, description, variations } = itemData;
  const iDid = itemData.id;
  const { id, price, image_list, diameter, dough } = variations[0];
  return (
    <div className="pizza-block">
      <img src={variations[0].image_list} alt="" className="pizza-image" />
      <hr />
      <h3 className="pizza-title">{name}</h3>
      <div className="pizza-description">{description}</div>
      <div className="pizza-footer">
        <button
          className="pizza-footer-btn"
          onClick={() =>
            dispatch(
              addItemToCard({
                id,
                price,
                image_list,
                diameter,
                dough,
                iDid,
                name,
              })
            )
          }
        >
          Add to basket
        </button>
        <span className="pizza-footer-price">{variations[0].price} BYN</span>
      </div>
    </div>
  );
};

export default GoodsItem;
