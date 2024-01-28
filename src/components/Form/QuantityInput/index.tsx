import { Minus, Plus } from "phosphor-react";
import { QuantityInputContainer } from "./styles";

export type Props = {
  quantity: number
  incrementQuantity: () => void // function that returns void
  decrementQuantity: () => void
}

export function QuantityInput({quantity, incrementQuantity, decrementQuantity} : Props){
  return (
    <QuantityInputContainer>
      <button onClick={decrementQuantity}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={14} /> 
      </button>
    </QuantityInputContainer>
  )
}