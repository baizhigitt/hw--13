import { useContext } from "react";
import { BusketItem } from "./BusketItem";
import { TotalAmount } from "./TotalAmount";
import styled from "styled-components";
import { BasketContext } from "../store/BasketProvider";

// Компонент (Busket) для расчёта и корректировки цен блюд, используется внутри готового модального окна

export const Busket = ({ onClose }) => {
  // onClose — это функция из useState, передаётся через props в компонент TotalAmount

  const ctx = useContext(BasketContext);

  const TotalAmountOfFood = ctx.meals.reduce((prev, curr) => {
    return prev + +curr.amount * +curr.price;
  }, 0);

  return (
    <div>
      <ScrollBar>
        {/* ...food - spread || food это каждый элемент из массива ctx.meals*/}
        {ctx.meals.map((food) => (
          <BusketItem
            key={food.id}
            {...food}
            onMinus={ctx.removeFromBasket}
            onPilus={ctx.addFromBasket}
          />
          //  BusketItem (component) озунчо чакырып атабыз  Busket(component'ичинде)
        ))}
      </ScrollBar>

      {/* Компонент TotalAmount, принимающий пропс onClose — функцию для закрытия ( модального окна) */}
      <TotalAmount onClose={onClose} TotalAmountOfFood={TotalAmountOfFood} />
    </div>
  );
};

const ScrollBar = styled.div`
  max-height: 250px;
  overflow: auto;
`;
