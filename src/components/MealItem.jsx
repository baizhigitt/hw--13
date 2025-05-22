import { MealItemDiscreption } from "./MealItemDiscreption";
import { MealItemAction } from "./MealItemAction";
import styled from "styled-components";
import { useRef } from "react";
import { BasketContext } from "../store/BasketProvider";
import { useContext } from "react";
// MealItem — компонент, который принимает компоненты MealItemDescription и MealItemAction

export const MealItem = (props) => {
  // props принимает из Meals.jsx
  const { description, title, price, id } = props;

  // Хук useRef используется для получения значения inputValue из компонента MealItemAction
  const ctx = useContext(BasketContext);

  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    // Объект mealInfo попадает в компонент BasketProvider, в функцию addToBasket(food)
    const mealInfo = {
      title: title,
      price: price,
      id: id,
      amount: inputRef.current.value,
    };

    // Функция передаёт объект mealInfo в компонент BasketProvider для добавления элемента в корзину
    ctx.addToBasket(mealInfo);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      {/* //MealItemDescription — компонент, который о отображает цены и описания блюд */}
      <MealItemDiscreption
        description={description}
        price={price}
        title={title}
      />
      {/* MealItemAction — компонент, который отображает кнопки, input и сумму. */}

      {/* amount */}
      <MealItemAction ref={inputRef} />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  box-shadow: 0px 6px 12px 0px ${({ theme }) => theme.colors.black};
`;
