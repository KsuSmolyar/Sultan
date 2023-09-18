import {ClipboardEvent, InputHTMLAttributes, KeyboardEvent, useState } from "react";
import styles from './inputform.module.css';
import classNames from "classnames";
import { onPhoneInput, onPhoneKeyDown, onPhonePaste } from "../../../utils/telMask";

export const InputForm = ({className, type, id,placeholderText,labelClassName, children,  required=false, minLength}: InputFormProps) => {
  const [value, setValue] = useState("");

  const onInputInput = (event: unknown) => {
    let inputValue = ((event as InputEvent).target as HTMLInputElement).value;
    if(type === "tel") {
      inputValue = onPhoneInput(event as InputEvent) ?? inputValue;
    }
    setValue(inputValue);
  }

  const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    let inputValue = event.currentTarget.value;
    if(type === "tel") {
      inputValue = onPhoneKeyDown(event) ?? inputValue;
    }
    setValue(inputValue);
  }

  const onInputPaste = (event: ClipboardEvent<HTMLInputElement>) => {
    let inputValue = event.currentTarget.value;
    if(type === "tel") {
      inputValue = onPhonePaste(event) ?? inputValue;
    }
    setValue(inputValue);
  }
  
  return (
    <label className={labelClassName} htmlFor={id}>
      <input id={id} className={classNames(styles.inputForm, className)} 
              type={type} placeholder={placeholderText} 
              required={required} autoComplete="off" 
              minLength={minLength}
              value={value}
              onInput={onInputInput}
              onKeyDown={onInputKeyDown}
              onPaste={onInputPaste}/>
      {children}
    </label>
  )
}

type InputFormProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  type: string;
  id: string;
  placeholderText: string;
  labelClassName?: string;
  required?: boolean;
}
