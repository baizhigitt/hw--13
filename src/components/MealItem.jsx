import { MealItemDiscreption } from "./MealItemDiscreption";
import { MealItemAction } from "./MealItemAction";
import styled from "styled-components";
export const MealItem = (props) => {
  const { description, title, price, id } = props;

  return (
    <StyledDiv>
      <MealItemDiscreption
        description={description}
        price={price}
        title={title}
      />
      <MealItemAction />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  box-shadow: 0px 6px 12px 0px ${({ theme }) => theme.colors.black};
`;
