import React from "react";
import { Link } from "react-router-dom";
import { ButtonOrLink } from "../../ui/button/button";
import { Bottle, CartWhite } from "../../ui/icons";
import styles from "./catalogCard.module.css";

export const CatalogCard = () => {
	return (
		<li className={styles.cardContainer}>
			<div className={styles.cardImage}>
				<img src='aos.png' alt='аос' />
			</div>
			<div className={styles.packageType}>
				<Bottle />
				<p>450 мл</p>
			</div>
			<Link to={"/product/" + 1} className={styles.cardTitle}>
				<b>AOS</b> средство для мытья посуды Crystal
			</Link>
			<div className={styles.specifications}>
				<div className={styles.specificationsItem}>
					<p className={styles.specificationsTitle}>Штрихкод:</p>
					<p className={styles.specificationsValue}>4604049097548</p>
				</div>
				<div className={styles.specificationsItem}>
					<p className={styles.specificationsTitle}>Производитель:</p>
					<p className={styles.specificationsValue}>Нэфис</p>
				</div>
				<div className={styles.specificationsItem}>
					<p className={styles.specificationsTitle}>Бренд:</p>
					<p className={styles.specificationsValue}>AOS</p>
				</div>
			</div>

			<div className={styles.priceContainer}>
				<p className={styles.priceValue}>48,76 ₸</p>
				<ButtonOrLink className={styles.cartButton} variant='secondary'>
					В корзину
					<CartWhite />
				</ButtonOrLink>
			</div>
		</li>
	);
};
