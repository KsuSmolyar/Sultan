import React, { useCallback } from "react";
import styles from "../adminTableRow.module.css";
import { TrashCan } from "../../../shared/ui/Icons";
import { useAppDispatch } from "../../../shared/hooks/hooks";
import { deleteProduct, SizeType } from "../../../store/slices/catalogSlice";
import { addProductId } from "../../../store/slices/adminSlice";
import { ButtonOrLink } from "../../../shared/ui/ButtonOrLink";

export const AdminTableRow: React.FC<AdminRowProps> = ({
    onClick,
    productImg,
    productName,
    productSizeType,
    productSize,
    productPrice,
    productBarcode,
}) => {
    const dispatch = useAppDispatch();
    const onDelete = () => {
        dispatch(deleteProduct(productBarcode));
    };
    const onRedact = useCallback(() => {
        onClick();
        dispatch(addProductId(productBarcode));
    }, [onClick, dispatch, productBarcode]);

    return (
        <div className={styles.rowContainer}>
            <div className={styles.img}>
                <img
                    className={styles.productImg}
                    src={productImg}
                    alt='изображение товара'
                />
            </div>
            <div className={styles.name}>{productName}</div>
            <div className={styles.sizeType}>{productSizeType}</div>
            <div className={styles.size}>{productSize}</div>
            <div className={styles.price}>{productPrice}</div>
            <div className={styles.action}>
                <ButtonOrLink
                    className={styles.editButton}
                    variant='primary'
                    onClick={onRedact}
                >
                    Редактировать
                </ButtonOrLink>
                <ButtonOrLink
                    className={styles.deleteButton}
                    variant='primary'
                    round
                    onClick={onDelete}
                >
                    <TrashCan />
                </ButtonOrLink>
            </div>
        </div>
    );
};

type AdminRowProps = {
    onClick: () => void;
    productImg: string;
    productName: string;
    productSizeType: SizeType;
    productSize: number;
    productPrice: number;
    productBarcode: number;
};
