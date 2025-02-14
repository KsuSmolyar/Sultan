import { CrossOrange } from "../../../shared/ui/Icons";
import styles from "../adminDialog.module.css";

type AdminDialogHeaderProps = {
    onClose: () => void
}
export const AdminDialogHeader = ({ onClose }: AdminDialogHeaderProps) => {
    return (
        <div className={styles.dialogHeader}>
            <h2 className={styles.title}>Редактирование/Добавление товара</h2>
            <button className={styles.closeButton} onClick={onClose}>
                <CrossOrange />
            </button>
        </div>
    )
}
