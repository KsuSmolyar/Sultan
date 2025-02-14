import { CrossOrange } from "../../../shared/ui/Icons";
import styles from "../adminDialog.module.css";

type AdminDialogImageContainerProps = {
    file: string
    setFile: React.Dispatch<React.SetStateAction<string | null>>
}
export const AdminDialogImageContainer = ({ file, setFile }: AdminDialogImageContainerProps) => {
    const onRemoveImage = () => {
        setFile(null);
    };

    return (
        <div className={styles.imageContainer}>
            <button className={styles.btn} onClick={onRemoveImage}>
                <CrossOrange />
            </button>
            <img
                className={styles.productImg}
                src={file}
                alt='изображение товара'
            />
        </div>
    )
}
