import React from "react";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { ButtonBack } from "../../components/buttonBack/buttonBack";
import { ProductCard } from "../../components/productCard/productCard";
import { UseMedia } from "../../hooks/useMedia";
import styles from "./productPage.module.css";

export const ProductPage = () => {
	const mobile = UseMedia("(max-width: 521px)");
	return (
		<div className={styles.wrapper}>
			{mobile ? (
				<ButtonBack className={styles.buttonBack} />
			) : (
				<Breadcrumbs
					crumbs={[
						{ title: "Каталог", link: "catalog" },
						{ title: "Мыло Bio", link: "product/:1" },
					]}
				/>
			)}
			<ProductCard />;
		</div>
	);
};
