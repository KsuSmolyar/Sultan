import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../paths";
import styles from "./mainPage.module.css";

export const MainPage = () => {
	return (
		<div className={styles.mainPageContainer}>
			<Link className={styles.link} to={paths.admin}>
				Перейти в админку
			</Link>
		</div>
	);
};
