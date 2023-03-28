import classNames from "classnames";
import React from "react";
import { ButtonOrLink } from "../../ui/button/button";
import { Bottle, TrashCan } from "../../ui/icons";
import styles from "./cartItem.module.css";

export const CartItem = () => {
	return (
		<div className={styles.container}>
			<hr className={styles.hr} />
			<div className={styles.cartItemConainer}>
				<div className={styles.cartItemImageContainer}>
					<img className={styles.cartItemImage} src='./aosCart.png' alt='' />
				</div>
				<div className={styles.cartItemInfo}>
					<div className={styles.textContainer}>
						<div className={styles.packageType}>
							<Bottle className={styles.packageTare} />
							<p>450 мл</p>
						</div>
						<p className={styles.packageTypeTitle}>
							AOS средство для мытья посуды Crystal
						</p>
						<p className={styles.packageTypeDescript}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							interdum ut justo, vestibulum sagittis iaculis iaculis. Quis
							mattis vulputate feugiat massa vestibulum duis.{" "}
						</p>
					</div>

					<div className={styles.priceContainer}>
						<p className={styles.price}>48,76 ₸</p>
						<div className={styles.quantityСhange}>
							<button
								className={classNames(styles.minus, styles.quantityButton)}
							>
								-
							</button>
							<p className={styles.count}>1</p>
							<button
								className={classNames(styles.plus, styles.quantityButton)}
							>
								+
							</button>
						</div>
						<ButtonOrLink
							className={styles.deleteButton}
							variant='primary'
							round
						>
							<TrashCan />
						</ButtonOrLink>
					</div>
				</div>
			</div>
		</div>
	);
};
