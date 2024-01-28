import styled from 'styled-components';

export const RadioButtonGroupContainer = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  display: flex;
  gap: 32px;
  flex-direction: column;

`;

export const RadioButtonGroupTitle = styled.div`
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

export const RadioButtonList = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: row;

`;