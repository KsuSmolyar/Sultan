import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./adminPage.module.css";
import { ButtonOrLink } from "../../shared/ui/ButtonOrLink";
import { AdminTable } from "../../features/AdminTable";
import { AdminDialog } from "../../widgets/AdminDialog";

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
