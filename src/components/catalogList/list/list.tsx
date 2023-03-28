import React from "react";
import { CatalogCard } from "../catalogCard/catalogCard";
import styles from "./list.module.css";

export const List = () => {
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
