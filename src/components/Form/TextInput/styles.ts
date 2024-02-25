import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
export const StyledLabel = styled.label<{opcional?: boolean}>`
  color: ${(props) => props.theme['base-label']};
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  display: flex;
  justify-content:space-between;
  gap: 8px;
  span{
    color: ${(props) => props.theme['base-label']};
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const StyledInput = styled.input<{ disabled?: boolean}>`
  padding: 12px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  &:focus{
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }
  ::placeholder{
    color: ${(props) => props.theme['base-text']};
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
  }
  // disabled
  ${({ disabled }) =>
    disabled &&
    `
      cursor: not-allowed;
    `
  }
`;