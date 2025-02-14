import { FormHTMLAttributes } from "react";
import styles from '../form.module.css';
import classNames from "classnames";

export const Form = ({ className, children }: FormProps) => {
    return (
        <form autoComplete="off" className={classNames(styles.form, className)}>
            {children}
        </form>
    )
}

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
    className?: string;
}
