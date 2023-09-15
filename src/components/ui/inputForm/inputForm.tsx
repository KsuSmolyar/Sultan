import {InputHTMLAttributes } from "react";
import styles from './inputform.module.css';
import classNames from "classnames";

export const InputForm = ({className, type, id,placeholderText,labelClassName, children,  required=false}: InputFormProps) => {
  return (
    <label className={labelClassName} htmlFor={id}>
      <input id={id} className={classNames(styles.inputForm, className)} type={type} placeholder={placeholderText} required={required}/>
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
  required?: boolean
}
