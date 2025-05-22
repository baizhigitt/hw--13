import VectorIcon from "../assets/Vector.svg";
import styled, { css, keyframes } from "styled-components";
import { useContext, useState } from "react";
import { BasketContext } from "../store/BasketProvider";
import { useEffect } from "react";
// defaultProps
export const Header = (props) => {
  const { onOpen } = props;
  const [animation, setAnimation] = useState(false);

  const { meals } = useContext(BasketContext);

  const mealCountReduce = meals.reduce((prev, curr) => {
    return prev + +curr.amount;
  }, 0);

  useEffect(() => {
    setAnimation(true);
    const timer = setTimeout(() => {
      setAnimation(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [meals]);

  return (
    <StyledHeader>
      <Wrapper>
        <Title>ReactMeals</Title>

        <BasketWrapper onClick={onOpen} animation={animation}>
          {/*  При нажатии на YourCard срабатывает onClick, который с помощью
          useState открывает Modal */}
          <img src={VectorIcon} alt="" />
          <YourCardDiv>Your Cart</YourCardDiv>
          <CountOfMeals>{mealCountReduce}</CountOfMeals>
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

function animate(props) {
  const { animation } = props;

  if (!animation) {
    return css``;
  }
  return css`
    animation: ${jumping} 0.1s linear infinite alternate-reverse;
  `;
}

const jumping = keyframes`
from {
  transform:translateY(-5px);
} 

to{
  transform:translateY(5px);
}

`;

const BasketWrapper = styled.div`
  background: ${({ theme }) => theme.colors.darkCherry};
  border-radius: 30px;
  padding: 20px 33px;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    ${animate}
  }
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
