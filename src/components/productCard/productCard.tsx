import classNames from "classnames";
import React, { useState } from "react";
import { UseMedia } from "../../hooks/useMedia";
import { ProductType } from "../../store/slices/catalogSlice";

import { ButtonOrLink } from "../ui/button/button";
import { ArrowPriceDark, Bottle, Box, CartWhite, Share } from "../ui/icons";
import styles from "./productCard.module.css";
import { useAppDispatch } from "../../hooks/hooks";
import { addProductToCart } from "../../store/slices/cartSlise";
import { DropDown } from "../ui/dropDown/dropDown";

export const ProductCard: React.FC<{ product: ProductType }> = ({
	product,
}) => {
	const table = UseMedia("(max-width: 1024px)");
	const [count, setCount] = useState(1);
	const dispatch = useAppDispatch();

	const typeSizeIcon = product.sizeType === "мл" ? <Bottle /> : <Box />;

	const onDecreaseCount = () => {
		setCount((prev) => {
			if (prev > 1) {
				return prev - 1;
			}
			return prev;
		});
	};

	const onIncreaseCount = () => {
		setCount((prev) => prev + 1);
	};

	const onAddToCart = () => {
		dispatch(addProductToCart({ barcode: product.barcode, count }));
	};

	return (
		<div className={styles.productCard}>
			<div className={styles.productImage}>
				<img className={styles.img} src={product.urlImg} alt={product.name} />
			</div>
			<div className={styles.productDescriptions}>
				<div className={styles.descriptionHeader}>
					<p className={styles.isAvailable}>В наличии</p>
					<p className={styles.descriptionTitle}>
						<b>{product.brand}</b> {product.name}
					</p>
					<p className={styles.packageType}>
						{typeSizeIcon} {product.size}
						{product.sizeType}
					</p>
				</div>

				<div className={styles.productPrice}>
					<div className={styles.priceContainerFirst}>
						<p className={styles.price}>{product.price} ₸</p>
						<div className={styles.quantityСhange}>
							<button
								data-testid='testDecrementButton'
								className={classNames(styles.minus, styles.quantityButton)}
								onClick={onDecreaseCount}
							>
								-
							</button>
							<p data-testid='testCount' className={styles.count}>
								{count}
							</p>
							<button
								data-testid='testIncrementButton'
								className={classNames(styles.plus, styles.quantityButton)}
								onClick={onIncreaseCount}
							>
								+
							</button>
						</div>
					</div>
					<div className={styles.priceContainerSecond}>
						<ButtonOrLink
							className={styles.priceButton}
							variant={table ? "secondary" : "primary"}
							onClick={onAddToCart}
						>
							В корзину <CartWhite />
						</ButtonOrLink>
						<div
							className={classNames(styles.shareIcon, styles.shareIconUpper)}
						>
							<Share />
						</div>
					</div>
				</div>

				<div className={styles.priceInfo}>
					<div className={styles.shareIcon}>
						<Share />
					</div>

					<div className={styles.priceContainerThird}>
						<div className={styles.promotion}>
							<p>
								При покупке от <b>10 000 ₸</b> бесплатная
								<br />
								доставка по Кокчетаву и области
							</p>
						</div>
						<button className={styles.buttonPriceList}>
							Прайс-лист <ArrowPriceDark />
						</button>
					</div>
				</div>

				<div className={styles.metaInfo}>
					<div className={styles.metaInfoItem}>
						<p className={styles.itemTitle}>Производитель:</p>
						<p className={styles.itemValue}>{product.maker}</p>
					</div>
					<div className={styles.metaInfoItem}>
						<p className={styles.itemTitle}>Бренд:</p>
						<p className={styles.itemValue}>{product.brand}</p>
					</div>

					<div className={styles.metaInfoItem}>
						<p className={styles.itemTitle}>Штрихкод:</p>
						<p className={styles.itemValue}>{product.barcode}</p>
					</div>
				</div>

				<DropDown
					defaultOpen
					classNameContainer={styles.dropDownContainer}
					buttonText='Описание'
				>
					<p className={styles.descriptText}>{product.description}</p>
				</DropDown>

				<hr className={styles.hr} />

				<DropDown
					defaultOpen
					classNameContainer={styles.dropDownContainer}
					buttonText='Характеристики'
				>
					<div className={styles.metaInfo}>
						<div className={styles.metaInfoItem}>
							<p className={styles.itemTitle}>Назначение:</p>
							<p className={styles.itemValue}>
								{product.appointment.join(" ")}
							</p>
						</div>

						<div className={styles.metaInfoItem}>
							<p className={styles.itemTitle}>Производитель:</p>
							<p className={styles.itemValue}>{product.maker}</p>
						</div>
						<div className={styles.metaInfoItem}>
							<p className={styles.itemTitle}>Бренд:</p>
							<p className={styles.itemValue}>{product.brand}</p>
						</div>

						<div className={styles.metaInfoItem}>
							<p className={styles.itemTitle}>Штрихкод:</p>
							<p className={styles.itemValue}>{product.barcode}</p>
						</div>
						<div className={styles.metaInfoItem}>
							<p className={styles.itemTitle}>Вес:</p>
							<p className={styles.itemValue}>
								{product.size} {product.sizeType}
							</p>
						</div>

						<div className={styles.metaInfoItem}>
							<p className={styles.itemTitle}>Кол-во в коробке:</p>
							<p className={styles.itemValue}>1</p>
						</div>
					</div>
				</DropDown>
				{/* <div className={styles.discribingContainer}>
					<button
						className={classNames(styles.discribingButton, {
							[styles.show]: showDescriptions,
						})}
						onClick={onToggleShowDescription}
					>
						Описание <Polygon4 />
					</button>
					{showDescriptions && (
						<p className={styles.descriptText}>{product.description}</p>
					)}
				</div> */}

				{/* <div className={styles.discribingContainer}>
					<button
						className={classNames(styles.discribingButton, {
							[styles.show]: showCharacteristics,
						})}
						onClick={onToggleCharacteristics}
					>
						Характеристики <Polygon4 />
					</button>
					{showCharacteristics && (
						<div className={styles.metaInfo}>
							<div className={styles.metaInfoItem}>
								<p className={styles.itemTitle}>Назначение:</p>
								<p className={styles.itemValue}>
									{product.appointment.join(" ")}
								</p>
							</div>

							<div className={styles.metaInfoItem}>
								<p className={styles.itemTitle}>Производитель:</p>
								<p className={styles.itemValue}>{product.maker}</p>
							</div>
							<div className={styles.metaInfoItem}>
								<p className={styles.itemTitle}>Бренд:</p>
								<p className={styles.itemValue}>{product.brand}</p>
							</div>

							<div className={styles.metaInfoItem}>
								<p className={styles.itemTitle}>Штрихкод::</p>
								<p className={styles.itemValue}>{product.barcode}</p>
							</div>
							<div className={styles.metaInfoItem}>
								<p className={styles.itemTitle}>Вес:</p>
								<p className={styles.itemValue}>
									{product.size} {product.sizeType}
								</p>
							</div>

							<div className={styles.metaInfoItem}>
								<p className={styles.itemTitle}>Кол-во в коробке:</p>
								<p className={styles.itemValue}>1</p>
							</div>
						</div>
					)}
				</div> */}
			</div>
		</div>
	);
};
