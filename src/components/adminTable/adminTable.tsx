import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { selectProducts } from "../../store/slices/catalogSlice";
import styles from "./adminTable.module.css";
import { AdminTableRow } from "./adminTableRow/adminTableRow";

export const AdminTable = () => {
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
						productImg={product.urlImg}
						productName={product.name}
						productSizeType={product.sizeType}
						productSize={product.size}
						productPrice={product.price}
					/>
				))}
			</div>
		</div>
	);
};
