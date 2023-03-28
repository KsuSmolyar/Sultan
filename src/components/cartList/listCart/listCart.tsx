import React from "react";
import { CartItem } from "../cartItem/cartItem";
import styles from "./listCart.module.css";

export const ListCart = () => {
	return (
		<ul className={styles.listCart}>
			<CartItem />
			<CartItem />
			<CartItem />
		</ul>
	);
};
