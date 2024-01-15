import styled from 'styled-components';

// Header
export const HeaderContainer = styled.header`
  padding: 32px 0px;
  background-color: ${(props) => props.theme['background-default']};
  .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
// Nav
export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-direction: row;
  a{
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 6px;
    border: 1px solid transparent; 
    transition: all .3s;

  }
  a[title="location"]{
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    &:hover{
      filter: brightness(0.9);
    }
  }
  a[title="cart"]{
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    &:hover{
      filter: brightness(0.9);
    }
  }
`;