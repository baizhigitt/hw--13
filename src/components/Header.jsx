import VectorIcon from "../assets/Vector.svg";
import styled from "styled-components";

export const Header = (props) => {
  const { mealsCount = 0 } = props;
  return (
    <StyledHeader>
      <Wrapper>
        <Title>ReactMeals</Title>
        <BasketWrapper>
          <img src={VectorIcon} alt="" />
          <YourCardDiv>Your Cart</YourCardDiv>
          <CountOfMeals>{mealsCount}</CountOfMeals>
        </BasketWrapper>
      </Wrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background:${({ theme }) => theme.colors.cherry}
  color: white;
  position:fixed;
  width:100%;
  z-index:999;
`;

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 0px;
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: 600;
`;

const BasketWrapper = styled.div`
  background: ${({ theme }) => theme.colors.darkCherry};
  border-radius: 30px;
  padding: 20px 33px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const YourCardDiv = styled.div`
  font-weight: 600px;
  margin-left: 12px;
  margin-right: 24px;
`;

const CountOfMeals = styled.span`
  background: ${({ theme }) => theme.colors.cherry};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 51px;
  height: 35px;
  border-radius: 30px;
`;
