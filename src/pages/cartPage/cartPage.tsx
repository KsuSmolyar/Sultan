import React, { useCallback, useState } from "react";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { ButtonBack } from "../../components/buttonBack/buttonBack";
import { CartDialog } from "../../components/cartList/cartDialog/cartDialog";
import { ListCart } from "../../components/cartList/listCart/listCart";
import { ButtonOrLink } from "../../components/ui/button/button";
import { UseMedia } from "../../hooks/useMedia";
import styles from "./cartPage.module.css";

export const CartPage = () => {
	const mobile = UseMedia("(max-width: 521px)");
	const [show, setShow] = useState(false);
	const toggleShow = useCallback(() => {
		setShow((prev) => !prev);
	}, []);

	return (
		<div className={styles.container}>
			{mobile ? (
				<ButtonBack className={styles.cartButtonBack} />
			) : (
				<Breadcrumbs
					className={styles.breadcrumbs}
					crumbs={[{ title: "Корзина", link: "cart" }]}
				/>
			)}
			<h2 className={styles.cartPageHeader}>Корзина</h2>
			<ListCart />
			<div className={styles.wrapper}>
				<hr className={styles.hr} />
				<div className={styles.resultContainer}>
					<ButtonOrLink
						className={styles.addButton}
						variant='primary'
						onClick={toggleShow}
					>
						Оформить заказ
					</ButtonOrLink>
					<p className={styles.resultPrice}>1 348,76 ₸</p>
				</div>
			</div>
			{show && <CartDialog onClose={toggleShow} />}
		</div>
	);
};
