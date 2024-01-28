import { Bank, CreditCard, CurrencyGbp, Money } from "phosphor-react";
import { RadioButtonGroupContainer, RadioButtonGroupTitle, RadioButtonList } from "./styles";
import { useTheme } from 'styled-components';
import { RadioInput } from "../../../../components/Form/Radio";

const radioButtons = [
  {
    "id": "0",
    "label": "Credit Card",
    "disabled": false,
    "isSelected": false,
    "children" : <CreditCard size={32} />
  },
  {
    "id": "1",
    "label": "Debit Card",
    "disabled": false,
    "isSelected": false,
    "children" : <Bank size={32} />
  },
  {
    "id": "2",
    "label": "Cash",
    "disabled": false,
    "isSelected": false,
    "children" : <Money size={32} />
  }
]

export function RadioButtonGroup(){
  const theme = useTheme();
  return (
    <RadioButtonGroupContainer>
      <RadioButtonGroupTitle>
        <CurrencyGbp size={22} color={theme['purple-dark']}/>
        <div>
          <h2>Payment</h2>
          <p>Payment is made upon delivery. Choose the way you want to pay</p>
        </div>
      </RadioButtonGroupTitle>
      <RadioButtonList>
      {
        radioButtons.map((item) => {
          return (
            <RadioInput 
              key={item.id}
              id={item.id}
              label={item.label}
              disabled={item.disabled}
              isSelected={item.isSelected}
            >
             {item.children}
            </RadioInput>
          )
        })
      }
        
      </RadioButtonList>
    </RadioButtonGroupContainer>
  )
}