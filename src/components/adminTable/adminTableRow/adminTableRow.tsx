import React, { useCallback } from "react";
import { deleteProduct, SizeType } from "../../../store/slices/catalogSlice";
import { TrashCan } from "../../ui/icons";
import { ButtonOrLink } from "../../ui/button/button";
import styles from "./adminTableRow.module.css";
import { useAppDispatch } from "../../../hooks/hooks";
import { addProductId } from "../../../store/slices/adminSlice";

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
