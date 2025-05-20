import styled from "styled-components";

export const MealItemDiscreption = ({ description, title, price }) => {
  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledPrice>{price}</StyledPrice>
    </div>
  );
};

const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  margin-bottom: 4px;
  margin-top: 24px;
`;

const StyledDescription = styled.div`
  font-style: italic;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;

const StyledPrice = styled.div`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;
