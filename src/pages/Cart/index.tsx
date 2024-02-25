import { useTheme } from "styled-components";
import { RadioInput } from "../../components/Form/Radio";
import { InputText } from "../../components/Form/TextInput";
import { CartContainer, InfoContainer, BasketContainer, PaymentContainer, PaymentContainerTitle, PaymentOptions } from "./styles";
import { Bank, CreditCard, CurrencyGbp, Money } from "phosphor-react";

const radioButtons = [
  {
    "id": "0",
    "label": "Credit Card",
    "name" : "paymentoption",
    "disabled": false,
    "isSelected": false,
    "children" : <CreditCard size={32} />
  },
  {
    "id": "1",
    "label": "Debit Card",
    "name" : "paymentoption",
    "disabled": false,
    "isSelected": false,
    "children" : <Bank size={32} />
  },
  {
    "id": "2",
    "label": "Cash",
    "name" : "paymentoption",
    "disabled": false,
    "isSelected": false,
    "children" : <Money size={32} />
  }
]

export function Cart() {
  const theme = useTheme();

  // Need to re-do all the work in the Cart, due to validations and also needs to be inside a form.
  return (
    <div className="container">
      <CartContainer>
        <InfoContainer>
          <h2>Finish your Order</h2>


          <PaymentContainer>
            <PaymentContainerTitle>
              <CurrencyGbp size={22} color={theme['purple-dark']}/>
              <div>
                <h2>Payment</h2>
                <p>Payment is made upon delivery. Choose the way you want to pay</p>
              </div>
            </PaymentContainerTitle>
            <PaymentOptions>
            {
              radioButtons.map((item) => {
                return (
                  <RadioInput
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    name={item.name}
                    disabled={item.disabled}
                    isSelected={item.isSelected}
                  >
                  {item.children}
                  </RadioInput>
                )
              })
            }
            </PaymentOptions>
          </PaymentContainer>


        </InfoContainer>
        <BasketContainer>
          <h2>Coffee Selected</h2>

        </BasketContainer>
      </CartContainer>
    </div>
  )
}