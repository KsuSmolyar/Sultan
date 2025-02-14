import React from "react";
import styles from "../adminTable.module.css";
import { useAppSelector } from "../../../shared/hooks/hooks";
import { selectProducts } from "../../../store/slices/catalogSlice";
import { AdminTableRow } from "../../../entities/AdminTableRow";

export const AdminTable: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    const products = useAppSelector(selectProducts);

    return (
        <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
                <div className={styles.img}>Изображение</div>
                <div className={styles.name}>Название</div>
                <div className={styles.sizeType}>Тип размера</div>
                <div className={styles.size}>Размер</div>
                <div className={styles.price}>Цена</div>
                <div className={styles.action}>Действие</div>
            </div>
            <div className={styles.tableBody}>
                {products.map((product) => (
                    <AdminTableRow
                        onClick={onClick}
                        key={product?.barcode}
                        productImg={product.urlImg}
                        productName={product.name}
                        productSizeType={product.sizeType}
                        productSize={product.size}
                        productPrice={product.price}
                        productBarcode={product.barcode}
                    />
                ))}
            </div>
        </div>
    );
};
