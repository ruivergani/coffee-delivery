import successIllustration from '../../assets/images/success-illustration.png';
import iconLocation from '../../assets/images/icon_location.svg';
import iconMoney from '../../assets/images/icon_money.svg';
import iconTimer from '../../assets/images/icon_timer.svg';
import { SectionSuccess, SectionSuccessImage, SectionSuccessText } from './styles';

export function Success(){
  return (
    <SectionSuccess>
      <div className="container">
        <SectionSuccessText>
          <h2>Woohoo! Order confirmed</h2>
          <h4>Now just wait and the coffee will soon reach you.</h4>
          <ul>
            <li>
              <img src={iconLocation} alt="" />
              <p>Delivery to Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS</p>
            </li>
            <li>
              <img src={iconTimer} alt="" />
              <p>Delivery forecast 20 min - 30 min</p>
            </li>
            <li>
              <img src={iconMoney} alt="" />
              <p>Payment on delivery Credit card</p>
            </li>
          </ul>
        </SectionSuccessText>
        <SectionSuccessImage>
          <img src={successIllustration} alt="" />
        </SectionSuccessImage>
      </div>
    </SectionSuccess>
  )
}