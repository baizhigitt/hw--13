import { Button } from "./UI/Button";
import styled from "styled-components";

// Компонент  для модального окна с отображением списка блюд, их цен и кнопками
// изменения количества ("-" и "+") и стили с помощью styled-components

export const BusketItem = (props) => {
  // Принимает props из Basket.jsx;
  const { id, title, amount, price, onMinus, onPilus } = props;

  return (
    <BusketItemWrapper>
      <div>
        <StyledTitle>{title}</StyledTitle>
        <Container>
          <StyledPrice>${price}</StyledPrice>
          <StyledAmount>x{amount}</StyledAmount>
        </Container>
      </div>
      <ButtonBox>
        <Button variant="PlusMinus" title="-" onClick={() => onMinus(id)} />
        <Button variant="PlusMinus" title="+" onClick={() => onPilus(id)} />
      </ButtonBox>
    </BusketItemWrapper>
  );
};

// BusketItem styles styles-components
const BusketItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 670px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding-top: 25px;
  padding-bottom: 28px;
`;

const StyledTitle = styled.p`
  color: ${({ theme }) => theme.colors.veryDarkgray};
  font-size: 20px;
  font-weight: 600;
`;

const StyledPrice = styled.div`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0px;
`;

const StyledAmount = styled.div`
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 6px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  gap: 42px;
  align-items: center;
  margin-top: 12px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 20px;
`;
