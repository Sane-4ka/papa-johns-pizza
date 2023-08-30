import React from "react";
import { useSelector } from "react-redux";

import GoodsItem from "./GoodsItem";

const GoodsList = () => {
  const goods = useSelector((state) => state.goods.goods);

  console.log("sdfgsdfghsd");
  function renderItem(data = goods) {
    const goodsArr = [];
    for (let i = 1; i < data.length; i++) {
      // data - all variations of food
      //      like: pizza, hot, drinks and others
      goodsArr.push({ name: data[i]?.name });
      // items/goodsArr[i - 1] - all goods of current type of productSubsection/variation

      goodsArr[i - 1].data = data[i]?.goods.map((item, i) => (
        <GoodsItem itemData={item} key={`${item.name}_X`} />
      ));
      //   goodsArr[i - 1].data = items;
    }
    // goodsArr - data contents all variations of food
    //    obj  like: {name, data: react faragm types}
    return goodsArr.map((item, i) => (
      <div className="goods-block" id={item.name} key={`${item.name}_${i}`}>
        <h2>{item.name}</h2>
        <div className="goods-container">
          {item.data.map((product) => product)}
        </div>
      </div>
    ));
  }
  return (
    <div className="goods">
      {goods ? goods.length !== 0 && renderItem(goods) : null}
    </div>
  );
};

export default GoodsList;
