import { useTheme } from "styled-components";
import { RadioInput } from "../../components/Form/Radio";
import { InputText } from "../../components/Form/InputText";
import { CartContainer, InfoContainer, BasketContainer, PaymentContainer, PaymentContainerTitle, PaymentOptions, AddressContainer, AddressContainerTitle, AddressFormInfo, FormsContainer, BasketTotalInfo, BasketInfo, CheckoutButton, CoffeeBasket, CoffeeItem, RemoveButton } from "./styles";
import { Bank, CreditCard, CurrencyGbp, MapPinLine, Money, Trash } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod"; // integrate with ZOD
import { QuantityInput } from "../../components/Form/QuantityInput";
import CoffeeImage from "../../assets/images/Type=Americano.svg";
import { useState } from "react";

export function Cart() {
  const theme = useTheme();
  //const selectedPaymentMethod = watch('paymentMethod');

  // States
  const [quantity, setQuantity] = useState(1);
  function handleIncrementQuantity() {

  }
  function handleDecrementQuantity() {

  }

  // Need to re-do all the work in the Cart, due to validations and also needs to be inside a form.
  return (
    <div className="container">
      <CartContainer>
        <InfoContainer>
          <h2>Finish your Order</h2>
          {/* Form */}
          <FormsContainer action="">
            <AddressContainer>
              <AddressContainerTitle>
                <MapPinLine size={22} color={theme['yellow-dark']}/>
                <div>
                  <h2>Delivery Address</h2>
                  <p>Inform the address where you want to receive your order.</p>
                </div>
              </AddressContainerTitle>
              <AddressFormInfo>
                <InputText
                  value=""
                  name="number"
                  placeholder={"Postcode"}
                  containerProps={{ style: { gridArea: 'cep' } }}
                />
                <InputText
                  value=""
                  name="text"
                  placeholder={"Street"}
                  containerProps={{ style: { gridArea: 'street' } }}
                />
                <InputText
                  value=""
                  name="number"
                  placeholder={"Number"}
                  containerProps={{ style: { gridArea: 'number' } }}
                />
                <InputText
                  value=""
                  name="text"
                  placeholder={"Complement"}
                  optional={true}
                  containerProps={{ style: { gridArea: 'fullAddress' } }}
                />
                <InputText
                  value=""
                  name="text"
                  placeholder={"County"}
                  containerProps={{ style: { gridArea: 'neighborhood' } }}
                />
                <InputText
                  value=""
                  name="text"
                  placeholder={"City"}
                  containerProps={{ style: { gridArea: 'city' } }}
                />
                <InputText
                  value=""
                  name="text"
                  placeholder={"State"}
                  maxLength={2}
                  containerProps={{ style: { gridArea: 'state' } }}
                />
              </AddressFormInfo>
            </AddressContainer>
            {/* Payment Section */}
            <PaymentContainer>
              <PaymentContainerTitle>
                <CurrencyGbp size={22} color={theme['purple-dark']} weight="bold"/>
                <div>
                  <h2>Payment</h2>
                  <p>Payment is made upon delivery. Choose the way you want to pay</p>
                </div>
              </PaymentContainerTitle>
              <PaymentOptions>
                <RadioInput
                  id="1"
                  label="Credit Card"
                  name="paymentOption"
                  //isSelected={selectedPaymentMethod === 'credit'}
                  value="credit"
                >
                  {<CreditCard size={32} weight="bold" />}
                </RadioInput>
                <RadioInput
                  id="2"
                  label="Debit Card"
                  name="paymentOption"
                  //isSelected={selectedPaymentMethod === 'debit'}
                  value="debit"
                >
                  {<Bank size={32} weight="bold" />}
                </RadioInput>
                <RadioInput
                  id="3"
                  label="Cash"
                  name="paymentOption"
                  //isSelected={selectedPaymentMethod === 'cash'}
                  value="cash"
                >
                  {<Money size={32} weight="bold" />}
                </RadioInput>
              </PaymentOptions>
            </PaymentContainer>
          </FormsContainer>
        </InfoContainer>

        {/* Basket Container */}
        <BasketContainer>
          <h2>Coffee Selected</h2>
          <BasketInfo>
            <CoffeeBasket>

              {/* Map Coffee Items */}
              <CoffeeItem>
                <img src={CoffeeImage} alt="" />
                <div className="content">
                  <div className="info">
                    <p>Expresso Traditional</p>
                    <div className="buttons">
                      <QuantityInput
                        quantity={quantity}
                        incrementQuantity={handleIncrementQuantity}
                        decrementQuantity={handleDecrementQuantity}
                      />
                      <RemoveButton>
                        <Trash size={16} color={theme['purple']} weight="bold"/>
                        Remove
                      </RemoveButton>
                    </div>
                  </div>
                  <aside>R$ 19,80</aside>
                </div>
              </CoffeeItem>

            </CoffeeBasket>
            <BasketTotalInfo>
              <p>Total of items: <span>R$ 29,70</span></p>
              <p>Delivery: <span>R$ 3,50</span></p>
              <p className="total">Total: <span>R$ 33,20</span></p>
              <CheckoutButton type="submit" form="order">
                Confirm Order
              </CheckoutButton>
            </BasketTotalInfo>
          </BasketInfo>
        </BasketContainer>
      </CartContainer>
    </div>
  )
}