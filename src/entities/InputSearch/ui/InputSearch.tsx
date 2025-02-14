import React, { InputHTMLAttributes } from "react";
import styles from "../inputSearch.module.css";
import classNames from "classnames";
import { Magnifier } from "../../../shared/ui/Icons";
import { ButtonOrLink } from "../../../shared/ui/ButtonOrLink";

export const InputSearch = React.memo<InputSearchProps>(
    ({
        className,
        variant = "primary",
        classNameLabel,
        children,
        onClick,
        ...props
    }) => {
        return (
            <label className={classNameLabel}>
                <input
                    {...props}
                    className={classNames(styles.input, className, {
                        [styles.primary]: variant === "primary",
                        [styles.small]: variant === "small",
                    })}
                    type='text'
                />
                <ButtonOrLink
                    className={styles.inputButton}
                    variant='small'
                    round
                    onClick={onClick}
                >
                    {children ? children : <Magnifier />}
                </ButtonOrLink>
            </label>
        );
    }
);

type InputSearchProps = InputHTMLAttributes<HTMLInputElement> & {
    classNameLabel?: string;
    variant?: "small" | "primary";
    onClick?: () => void;
};
