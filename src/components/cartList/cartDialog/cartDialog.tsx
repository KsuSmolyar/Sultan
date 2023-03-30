import React from "react";
import { ButtonOrLink } from "../../ui/button/button";
import { CrossOrange, Ticking } from "../../ui/icons";
import { Modal } from "../../ui/modal/modal";
import styles from "./cartDialog.module.css";

export const CartDialog: React.FC<{ onClose: () => void }> = ({ onClose }) => {
	return (
		<Modal className={styles.backdrop}>
			<div className={styles.cartDialogContainer}>
				<button className={styles.dialogCross} onClick={onClose}>
					<CrossOrange className={styles.cross} />
				</button>
				<div className={styles.dialogInfo}>
					<ButtonOrLink
						className={styles.dialogButton}
						variant='small'
						round
						onClick={onClose}
					>
						<Ticking />
					</ButtonOrLink>
					<p className={styles.dialogTitle}>Спасибо за заказ</p>
					<p className={styles.dialogText}>
						Наш менеджер свяжется с вами в ближайшее время
					</p>
				</div>
			</div>
		</Modal>
	);
};
