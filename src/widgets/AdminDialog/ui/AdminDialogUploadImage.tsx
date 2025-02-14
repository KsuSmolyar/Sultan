import classNames from "classnames";
import styles from "../adminDialog.module.css";
import { useCallback, useState } from "react";

type AdminDialogUploadImageProps = {
    setFile: React.Dispatch<React.SetStateAction<string | null>>
}
export const AdminDialogUploadImage = ({ setFile }: AdminDialogUploadImageProps) => {
    const [dragOver, setDragOver] = useState(false);

    const fileProcess = useCallback((file: File) => {
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
            if (typeof event.target?.result === "string") {
                setFile(event.target?.result);
            }
        };
        fileReader.readAsDataURL(file);
    }, [setFile]);

    const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            fileProcess(file);
        }
    };

    const onDrop = useCallback((event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        setDragOver(false);
        if (event.dataTransfer.files) {
            const file = event.dataTransfer.files[0];
            fileProcess(file);
        }
    }, [fileProcess]);

    const onDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        setDragOver(true);
    };

    const onDragLeave = (event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        setDragOver(false);
    };

    return (
        <label
            className={classNames(styles.labelImg, {
                [styles.dragOver]: dragOver,
            })}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
        >
            <span className={styles.labelText}>
                Кликните или перетащите изображение
            </span>
            <input
                name='urlImg'
                type='file'
                accept='image/png, image/jpg'
                onChange={onFileUpload}
                hidden
            />
        </label>
    )
}
