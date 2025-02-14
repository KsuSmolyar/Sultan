import React from "react";
import styles from "../cartDialog.module.css";
import { ButtonOrLink } from "../../../shared/ui/ButtonOrLink";
import { Modal } from "../../../shared/ui/Modal";
import { CrossOrange, Ticking } from "../../../shared/ui/Icons";

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
