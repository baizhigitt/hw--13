import styled from "styled-components";
import { MealItem } from "./MealItem";

// statless components
export const Meals = (props) => {
  const { meals } = props;

  return (
    <MealsWrapper>
      <MealsContainer>
        {meals.map((meal) => {
          return <MealItem key={meal.id} {...meal} />;
        })}
      </MealsContainer>
    </MealsWrapper>
  );
};

const MealsWrapper = styled.div`
  min-height: 500px;
  background: ${({ theme }) => theme.colors.darkGray};
  padding-top: 100px;
`;

const MealsContainer = styled.div`
  border-radius: 16px;
  /* height: 564px; */
  background: ${({ theme }) => theme.colors.white};
  padding: 36px 40px;
  max-width: 1000px;
  margin: 0 auto;
`;
