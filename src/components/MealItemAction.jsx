import styled from "styled-components";

import { Button } from "./UI/Button";
export const MealItemAction = () => {
  return (
    <div>
      <div>
        <StyledLabel htmlFor="">Amount</StyledLabel>
        <StyledInput type="number" />
      </div>
      <ButtonContainer>
        <Button variant="Addplus" title="Add" />
      </ButtonContainer>
    </div>
  );
};

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.veryDarkgray};
  font-size: 18px;
  font-weight: 600;
`;

const StyledInput = styled.input`
  padding: 8px 8px;
  border-radius: 8px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.veryDarkgray};
  width: 60px;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  outline: none;
  margin-left: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: end;
  align-items: end;
`;
