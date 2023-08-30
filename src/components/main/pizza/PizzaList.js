import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PizzaSkeleton from "../../Skeleton/PizzaSkeleton";
import PizzaItem from "./PizzaItem";

const PizzaList = () => {
  const [filteredGoods, setFilteredGoods] = useState([]);
  const dispatch = useDispatch();
  const { goods, status } = useSelector(
    (state) => state.goods
  );
  const activePizzaFilter = useSelector(
    (state) => state.pizzaFilters.activePizzaFilter
  );
  const filterGoodsByType = () => {
    activePizzaFilter !== "all"
      ? setFilteredGoods(
          goods[0]?.goods.filter((item, i) =>
            item.types.some((type) => type.code === activePizzaFilter)
          )
        )
      : setFilteredGoods(goods[0]?.goods);
  };

  useEffect(() => {
    goods?.length !== 0 && status === "success" && filterGoodsByType();
  }, [goods, activePizzaFilter]);

  const skeletons = [...new Array(9)].map((_, index) => (
    <PizzaSkeleton key={index} />
  ));

  function renderItem(data = goods) {
    return data.map((item, i) => (
      <PizzaItem dispatch={dispatch} itemData={item} key={`${item.name}_X`} />
    ));
  }

  const elements =
    status === "success" && goods.length !== 0 ? (
      renderItem(filteredGoods)
    ) : status === "loading" ? (
      skeletons
    ) : (
      <h2>Smth went wrong</h2>
    );

  return <div className="pizza">{elements}</div>;
};

export default PizzaList;
