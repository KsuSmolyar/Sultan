import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AdminDialog } from "../../components/adminDialog/adminDialog";
import { AdminTable } from "../../components/adminTable/adminTable";
import { ButtonOrLink } from "../../components/ui/button/button";
import styles from "./adminPage.module.css";

export const AdminPage = () => {
	const [show, setShow] = useState(false);
	const onClick = () => {
		setShow((prev) => !prev);
	};

	return (
		<div className={styles.adminPageContainer}>
			<div className={styles.adminPageHeader}>
				<Link className={styles.mainLink} to='/'>
					Вернуться на главную
				</Link>
				<ButtonOrLink
					className={styles.addButton}
					variant='primary'
					onClick={onClick}
				>
					Добавить товар
				</ButtonOrLink>
			</div>
			{show && <AdminDialog onClose={onClick} />}
			<AdminTable onClick={onClick} />
		</div>
	);
};
