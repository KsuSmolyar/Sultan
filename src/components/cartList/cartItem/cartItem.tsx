import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { ButtonOrLink } from "../../ui/button/button";
import { Bottle, Box, TrashCan } from "../../ui/icons";
import styles from "./cartItem.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
	addProductToCart,
	removeCartProduct,
} from "../../../store/slices/cartSlise";
import { ProductType, selectProduct } from "../../../store/slices/catalogSlice";

export const CartItem: React.FC<{ barcode: string; countProduct: number }> = ({
	barcode,
	countProduct,
}) => {
	const dispatch = useAppDispatch();
	const product = useAppSelector(selectProduct(barcode));
	const onRemoveCartProduct = () => {
		dispatch(removeCartProduct(product.barcode));
	};

	const typeSizeIcon =
		product.sizeType == "мл" ? (
			<Bottle className={styles.packageTare} />
		) : (
			<Box className={styles.packageTare} />
		);

	const onDecreaseCount = () => {
		dispatch(addProductToCart({ barcode: product.barcode, count: -1 }));
	};

	const onIncreaseCount = () => {
		dispatch(addProductToCart({ barcode: product.barcode, count: 1 }));
	};

	return (
		<div className={styles.container}>
			<hr className={styles.hr} />
			<div className={styles.cartItemConainer}>
				<div className={styles.cartItemImageContainer}>
					<img
						className={styles.cartItemImage}
						src={product.urlImg}
						alt='изображение товара'
					/>
				</div>
				<div className={styles.cartItemInfo}>
					<div className={styles.textContainer}>
						<div className={styles.packageType}>
							{typeSizeIcon}
							<p>
								{product.size} {product.sizeType}
							</p>
						</div>
						<p className={styles.packageTypeTitle}>
							{product.brand} {product.name}
						</p>
						<p className={styles.packageTypeDescript}>{product.description}</p>
					</div>

					<div className={styles.priceContainer}>
						<p className={styles.price}>{product.price * countProduct} ₸</p>
						<div className={styles.quantityСhange}>
							<button
								className={classNames(styles.minus, styles.quantityButton)}
								onClick={onDecreaseCount}
							>
								-
							</button>
							<p className={styles.count}>{countProduct}</p>
							<button
								className={classNames(styles.plus, styles.quantityButton)}
								onClick={onIncreaseCount}
							>
								+
							</button>
						</div>
						<ButtonOrLink
							className={styles.deleteButton}
							variant='primary'
							round
							onClick={onRemoveCartProduct}
						>
							<TrashCan />
						</ButtonOrLink>
					</div>
				</div>
			</div>
		</div>
	);
};
