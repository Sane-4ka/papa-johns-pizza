import React, { useState, useEffect } from "react";
import { addItemToCard } from "../../../redux/slice/cartSlice";

export interface pizzaItemProps {
  dispatch: any;
  itemData: goodsItemData;
}

export type goodsItemData = {
  name: string;
  description: string;
  variations: currentVariationProps[];
  id: number;
}

type currentVariationProps = {
  id: number;
  price: number;
  image_list: string;
  diameter: number;
  dough: string;
  stuffed_crust: string;
  size: [ value: number ];
};

const PizzaItem: React.FC<pizzaItemProps> = ({ dispatch, itemData }) => {
  const [size, setSize] = useState([]);
  const [currentType, setCurrentType] = useState("Традиционное");
  // arr with size ids
  const [currentId, setCurrentId] = useState<number>(0);
  // arr with variation ids
  const [variationIds, setVariationIds] = useState([[]]);
  const { name, description, variations } = itemData;
  const iDid = itemData.id;

  useEffect(() => {
    setType();
  }, []);

  const setType = (value = currentType) => {
    setCurrentType(value);
    setCurrentId(currentId);
    setSize([]);
    setVariationIds([]);
    setCurrentId(0);
    variations.forEach((item, i) => {
      if (item.stuffed_crust === "none" && item.dough === value) {
        //? refactor
        //@ts-ignore
        setSize((size) => [...size, item.size.value]);
        setVariationIds((state: any) => [...state, i]);
      }
    });
  };

  const renderSizes = () => {
    return size.map((size, i) => {
      // return !size ? <span>Данного вида нет в продаже</span> :
      return (
        <span
          key={`${name}_${i}`}
          onClick={() => setCurrentId(i)}
          className={
            i === currentId ? `filter-size-item active` : "filter-size-item"
          }
        >
          {size}cm
        </span>
      );
    });
  };

  const onAddToCart = (currentVariation: currentVariationProps) => {
    // console.log({currentVariation, iDid})
    const { id, price, image_list, diameter, dough } = currentVariation;
    dispatch(
      addItemToCard({ id, price, image_list, diameter, dough, name, iDid })
    );
  };

  const makeContent = () => {
    let varId: currentVariationProps =
      variations[Number(variationIds[currentId])];
    // return !!varId?.kind.id && (
    return (
      <div className="pizza-block">
        <div className="pizza-block-img">
          <img src={varId?.image_list} alt="" className="pizza-image" />
        </div>
        <hr />
        <h3 className="pizza-title">{name}</h3>
        <div className="pizza-description">{description}</div>
        <div className="pizza-filter">
          <div className="pizza-filter-size">
            <div
              className={
                currentType === "Традиционное"
                  ? `filter-size-item active`
                  : "filter-size-item"
              }
              data-type="Традиционное"
              // @ts-ignore
              onClick={(e) => setType(e.target.getAttribute("data-type"))}
            >
              Традиционное
            </div>
            <div
              className={
                currentType === "Тонкое"
                  ? `filter-size-item active`
                  : "filter-size-item"
              }
              data-type="Тонкое"
              // @ts-ignore
              onClick={(e) => setType(e.target.getAttribute("data-type"))}
            >
              Тонкое
            </div>
          </div>
          <div className="pizza-filter-size">{renderSizes()}</div>
        </div>
        <div className="pizza-footer">
          <button
            className="pizza-footer-btn"
            onClick={() => onAddToCart(varId)}
          >
            Add to basket
          </button>
          <span className="pizza-footer-price">
            {varId ? varId.price : null} BYN
          </span>
        </div>
      </div>
    );
  };

  const elements = makeContent();

  return <React.Fragment>{elements}</React.Fragment>;
};

export default PizzaItem;
