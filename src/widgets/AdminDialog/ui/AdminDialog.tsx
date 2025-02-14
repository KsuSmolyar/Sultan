import React, { useEffect } from "react";
import { useAppDispatch } from "../../../shared/hooks/hooks";
import { addProductId } from "../../../store/slices/adminSlice";
import styles from "../adminDialog.module.css";
import { Modal } from "../../../shared/ui/Modal";
import { AdminDialogHeader } from "./AdminDialogHeader";
import { AdminDialogForm } from "./AdminDialogForm";

export const AdminDialog: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(addProductId(null));
        };
    }, [dispatch]);

    return (
        <Modal className={styles.modal}>
            <div className={styles.dialogContainer}>
                <AdminDialogHeader onClose={onClose} />
                <AdminDialogForm onClose={onClose} />
            </div>
        </Modal>
    );
};
