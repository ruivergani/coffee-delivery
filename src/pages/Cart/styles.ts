import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  margin-top: 40px;
`;
export const InfoContainer = styled.div`
  h2{
    font-size: 18px;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 15px;
  }
  display: flex;
  gap: 15px;
  flex-direction: column;
  width: 100%;
  max-width: 604px;

`;
export const PaymentContainer = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  display: flex;
  gap: 32px;
  flex-direction: column;
`;
export const PaymentContainerTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  div{
    h2{
      font-size: 16px;
      font-weight: 500;
      line-height: 130%;
      margin-bottom: 5px;
    }
    p{
      font-size: 14px;
      font-weight: 400;
      line-height: 130%;
    }
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
`;

export const BasketContainer = styled.div`
  h2{
    font-size: 18px;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 15px;
  }
`;