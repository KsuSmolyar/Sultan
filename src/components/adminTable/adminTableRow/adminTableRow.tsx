import React from "react";
import { SizeType } from "../../../store/slices/catalogSlice";
import { TrashCan } from "../../ui/icons";
import { ButtonOrLink } from "../../ui/button/button";
import styles from "./adminTableRow.module.css";

export const AdminTableRow: React.FC<AdminRowProps> = ({
	productImg,
	productName,
	productSizeType,
	productSize,
	productPrice,
}) => {
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
				<ButtonOrLink className={styles.editButton} variant='primary'>
					Редактировать
				</ButtonOrLink>
				<ButtonOrLink className={styles.deleteButton} variant='primary' round>
					<TrashCan />
				</ButtonOrLink>
			</div>
		</div>
	);
};

type AdminRowProps = {
	productImg: string;
	productName: string;
	productSizeType: SizeType;
	productSize: number;
	productPrice: number;
};
