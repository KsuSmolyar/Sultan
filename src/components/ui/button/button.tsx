import React, { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const ButtonOrLink = React.memo<ButtonProps>(
	({ className, variant = "primary", round, children, to, ...props }) => {
		if (to != null) {
			return (
				<Link
					className={classNames(styles.button, className, {
						[styles.primary]: variant === "primary",
						[styles.secondary]: variant === "secondary",
						[styles.small]: variant === "small",
						[styles.round]: round,
					})}
					to={to}
				>
					{children}
				</Link>
			);
		}
		return (
			<button
				{...props}
				className={classNames(styles.button, className, {
					[styles.primary]: variant === "primary",
					[styles.secondary]: variant === "secondary",
					[styles.small]: variant === "small",
					[styles.round]: round,
				})}
			>
				{children}
			</button>
		);
	}
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "secondary" | "small";
	round?: boolean;
	to?: string;
};
