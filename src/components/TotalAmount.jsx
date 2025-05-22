import { Button } from "./UI/Button";
import styled from "styled-components";

// Компонент TotalAmount — отображает итоговую сумму заказа (используется в Basket.jsx)
// Компонент Button — используется для открытия и закрытия модального окна

export const TotalAmount = ({ onClose, TotalAmountOfFood }) => {
  return (
    <TotalAmountBox>
      <AmountBox>
        <p>Total Amount</p>
        <TotalAmountInBox>${TotalAmountOfFood.toFixed(2)}</TotalAmountInBox>
      </AmountBox>
      <ButtonWrapper>
        {/* Компонент Button, при клике на который вызывается функция onClose для закрытия модального окна */}
        <Button onClick={onClose} variant={"close"} title={"Close"} />
        <Button variant={"order"} title={"Order"} />
      </ButtonWrapper>
    </TotalAmountBox>
  );
};

// TotalAmount styles с помощью styled-components
const TotalAmountBox = styled.div`
  margin-top: 30px;
  p {
    color:${({ theme }) => theme.colors.veryDarkgray}
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
  }
`;

const TotalAmountInBox = styled.div`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
`;

const AmountBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;
