import React, { ReactElement, useEffect, useState } from "react";
import { Polygon4 } from "../icons";
import styles from "./dropDown.module.css";
import classNames from "classnames";

export const DropDown = React.memo<DropDownProps>(
	({
		defaultOpen,
		className,
		buttonText,
		children,
		classNameContainer,
		close,
		onClick,
		dataTestid,
	}) => {
		const [show, setShow] = useState(defaultOpen);
		const onToggleShow = () => {
			setShow((prev) => !prev);
			onClick && onClick();
		};

		useEffect(() => {
			if (close) {
				setShow(false);
			}
		}, [close]);
		return (
			<div className={classNames(styles.dropDownContainer, classNameContainer)}>
				<button
					data-testid={dataTestid}
					className={classNames(styles.button, className, {
						[styles.show]: show,
					})}
					onClick={onToggleShow}
				>
					{buttonText} <Polygon4 />
				</button>
				{show && children}
			</div>
		);
	}
);

type DropDownProps = {
	defaultOpen?: boolean;
	className?: string;
	buttonText: string;
	children: ReactElement;
	classNameContainer?: string;
	close?: boolean;
	onClick?: () => void;
	dataTestid?: string;
};
