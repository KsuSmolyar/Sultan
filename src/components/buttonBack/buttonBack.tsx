import classNames from "classnames";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonOrLink } from "../ui/button/button";
import { ArrowLeftDark } from "../ui/icons";
import styles from "./buttonBack.module.css";

export const ButtonBack: React.FC<{ className?: string }> = ({ className }) => {
	const navigate = useNavigate();
	const onClick = () => {
		navigate(-1);
	};
	return (
		<div className={classNames(styles.buttonBackContainer, className)}>
			<ButtonOrLink
				className={styles.sidebarButton}
				variant='small'
				round
				onClick={onClick}
			>
				<ArrowLeftDark className={styles.sidebarButtonImg} />
			</ButtonOrLink>
			<p className={styles.text}>Назад</p>
		</div>
	);
};
