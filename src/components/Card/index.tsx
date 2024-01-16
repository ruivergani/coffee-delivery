import { ShoppingCart } from 'phosphor-react';
import cardImage from '../../assets/images/Type=Expresso.svg';
import { CardCoffee, CardCoffeeFooter } from './styles';

export function Card(){
  return(
    <CardCoffee>
      <img src={cardImage} alt="" className='cardCoffeeImage'/>
      <div className="tags">
        <span>tradicional</span>
        <span>tradicional</span>
      </div>
      <h4>Expresso Tradicional</h4>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <CardCoffeeFooter>
        <div className="cardfooter__price">
          <p><span>R$ </span>9,90</p>
        </div>
        <div className="cardfooter__buttons">
          {/* input missing quantity + or - */}
          <button type='button'>
            <ShoppingCart size={22}/>
          </button>
        </div>
      </CardCoffeeFooter>
    </CardCoffee>
  )
}