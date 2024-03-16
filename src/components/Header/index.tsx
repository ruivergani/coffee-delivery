// Images
import { MapPin, ShoppingCart } from 'phosphor-react';
import logoImage from '../../assets/logos/logo.svg';
// React Router DOM
import { NavLink } from 'react-router-dom';
import { HeaderContainer, HeaderNav } from './styles';
import { useCart } from '../../hooks/useCart';

export function Header(){
  // Functions
  function refreshPage() {
    window.location.reload();
  }
  const { cartQuantity } = useCart();
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
          <NavLink to="/cart" title="cart" aria-disabled={cartQuantity === 0}>
            <ShoppingCart size={22} />
            {cartQuantity > 0 ? <span><p>{cartQuantity}</p></span> : null}
          </NavLink>
        </HeaderNav>
      </div>
    </HeaderContainer>
  )
}