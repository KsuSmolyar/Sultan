import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import { selectCart } from "../../../store/slices/cartSlise";
import { CartItem } from "../cartItem/cartItem";
import styles from "./listCart.module.css";
import { paths } from "../../../router";

export const ListCart = () => {
	const cartProduct = useAppSelector(selectCart);
	const cartProductKeys = Object.keys(cartProduct);
	if (cartProductKeys.length === 0) {
		return (
			<div className={styles.emptyCart}>
				<p>
					Корзина пуста, перейти в{" "}
					<Link
						className={styles.link}
						to={"/" + paths.catalog.replace(":page", "1")}
					>
						Каталог
					</Link>
				</p>
			</div>
		);
	}
	return (
		<ul className={styles.listCart}>
			{cartProductKeys.map((barcode) => (
				<CartItem
					key={barcode}
					barcode={barcode}
					countProduct={cartProduct[+barcode]}
				/>
			))}
		</ul>
	);
};
