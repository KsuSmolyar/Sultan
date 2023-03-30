import React from "react";
import { useAppSelector } from "../../../hooks/hooks";
import { selectProducts } from "../../../store/slices/catalogSlice";
import { CatalogCard } from "../catalogCard/catalogCard";
import styles from "./list.module.css";

export const List = () => {
	const products = useAppSelector(selectProducts);
	console.log(products);
	return (
		<ul className={styles.catalogList}>
			<CatalogCard />
			<CatalogCard />
			<CatalogCard />
			<CatalogCard />
			<CatalogCard />
			<CatalogCard />
		</ul>
	);
};
