// Images
import { MapPin, ShoppingCart } from 'phosphor-react';
import logoImage from '../../assets/logos/logo.svg';
// React Router DOM
import { NavLink } from 'react-router-dom';
import { HeaderContainer, HeaderNav } from './styles';

export function Header(){
  // Functions
  function refreshPage() {
    window.location.reload();
  }
  return (
    <HeaderContainer>
      <div className='container'>
        <NavLink to='/'>
          <img src={logoImage} alt="" title="" onClick={refreshPage} />
        </NavLink>
        <HeaderNav>
          <NavLink to="/" title="location">
            <MapPin size={22}/>
            <p>Sao Paulo</p>
          </NavLink>
          <NavLink to="/cart" title="cart">
            <ShoppingCart size={22}/>
          </NavLink>
        </HeaderNav>
      </div>
    </HeaderContainer>
  )
}