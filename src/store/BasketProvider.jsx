import { createContext, useState } from "react";

// Используем useContext для передачи данных из компонента MealItem в компонент Header.

export const BasketContext = createContext({
  // Массив для отображения объектов (названия блюд, цены и расчет общей суммы) в компоненте Header (модальное окно "Your Cart").

  meals: [],
});

export const BasketProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);

  // Функция addToBasket получает данные из MealItem.jsx для добавления блюда в корзину
  const addToBasket = (food) => {
    //  find нужен чтобы проверить есть ли блюдо в корзине
    const existingFood = meals.find((item) => item.id === food.id);

    // existingFood =>undefined || method  find = вернет {title:"Pizza", id:id, price:$,}

    //  и если  блюдо есть
    if (existingFood) {
      existingFood.amount = +food.amount + +existingFood.amount;
      const updatedFoods = [...meals];
      setMeals(updatedFoods);
    } else {
      setMeals([...meals, food]);
    }
  };

  const removeFromBasket = (id) => {
    const existingFood = meals.find((item) => item.id === id);
    if (existingFood.amount === 1) {
      const filteredMeals = meals.filter((item) => item.id !== existingFood.id);
      setMeals(filteredMeals);
    } else {
      existingFood.amount = existingFood.amount - 1;
      /// Копируем массив, создавая новую ссылку
      const updatedMeals = [...meals];
      setMeals(updatedMeals);
    }
  };
  const addFromBasket = (id) => {
    const existingFood = meals.find((item) => item.id === id);
    existingFood.amount = +existingFood.amount + 1;

    //  Копируем массив, создавая новую ссылку

    const updatedMeals = [...meals];
    setMeals(updatedMeals);
  };

  return (
    <BasketContext.Provider
      value={{ meals, addToBasket, removeFromBasket, addFromBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};
