import { RadioInputContainer, StyledInput, StyledLabel } from "./styles";
import {InputHTMLAttributes} from "react";
import { boolean } from "zod";

// Interface containing InputHTMLAttributes + those below set to required
export interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  disabled?: boolean;
  isSelected?: boolean;
}

export function RadioInput({id, label, disabled = false, isSelected, children, ...props } : InputElementProps){
  return (
    <RadioInputContainer data-state={isSelected}>
      <StyledInput type="radio" name={label} id={id} disabled={disabled} {...props}/>
      <StyledLabel htmlFor={id}>
        {children}
        {label}
      </StyledLabel>
    </RadioInputContainer>
  )
}
// Properties
RadioInput.defaultProps = {
  isSelected: boolean,
}