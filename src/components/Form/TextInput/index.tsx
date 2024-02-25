import { InputHTMLAttributes } from "react";
import { InputWrapper, StyledInput, StyledLabel } from "./styles";

// Creating the InputText Props
export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement>{
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  disabled?: boolean;
  opcional?: boolean;
  setInputValue: (value: string | number | 'email' | 'password') => void;
}

export function InputText({
  type, label, value, name, placeholder, disabled, opcional, setInputValue} : InputTextProps) {
  return (
    <InputWrapper>
      <StyledLabel htmlFor="{label}">
        {label}
        {opcional && <span>Opcional </span>}
      </StyledLabel>
      <StyledInput
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(event) => setInputValue(event.target.value)}
        >
      </StyledInput>
    </InputWrapper>
  )
}