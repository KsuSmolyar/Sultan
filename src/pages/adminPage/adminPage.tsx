import React from "react";
import { Link } from "react-router-dom";
import { AdminDialog } from "../../components/adminDialog/adminDialog";
import { AdminTable } from "../../components/adminTable/adminTable";
import styles from "./adminPage.module.css";

export const AdminPage = () => {
	return (
		<div className={styles.adminPageContainer}>
			<Link className={styles.mainLink} to='/'>
				Вернуться на главную
			</Link>
			<AdminDialog />
			<AdminTable />
		</div>
	);
};
