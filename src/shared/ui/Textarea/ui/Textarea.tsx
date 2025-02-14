import styles from "../textarea.module.css";
import { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    defaultValue?: string
    name: string
    id: string
    placeholder: string
}
export const Textarea = ({ defaultValue, name, id, placeholder, ...props }: TextareaProps) => {
    return (
        <label>
            <textarea
                className={styles.textarea}
                defaultValue={defaultValue}
                name={name}
                id={id}
                placeholder={placeholder}
                {...props}
            />
        </label>
    )
}
