import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import { paths } from "../../../router";
import {
	selectAppointment,
	selectMaker,
	selectPrice,
	selectProducts,
	selectSort,
} from "../../../store/slices/catalogSlice";
import { Pagination } from "../../pagination/pagination";
import { CatalogCard } from "../catalogCard/catalogCard";
import styles from "./list.module.css";

const defaultCardsOnPage = 9;
export const List = () => {
	const products = useAppSelector(selectProducts);
	const appointmentFilter = useAppSelector(selectAppointment);
	const priceFilter = useAppSelector(selectPrice);
	const makerFilter = useAppSelector(selectMaker);
	const sort = useAppSelector(selectSort);
	const { page } = useParams<{ page: string }>();

	const filtredProducts = useMemo(() => {
		return products.filter((product) => {
			if (
				appointmentFilter &&
				!product.appointment.includes(appointmentFilter)
			) {
				return false;
			}
			if (
				priceFilter &&
				(priceFilter[0] > product.price || priceFilter[1] < product.price)
			) {
				return false;
			}
			if (makerFilter && !makerFilter.includes(product.maker)) {
				return false;
			}
			return true;
		});
	}, [appointmentFilter, priceFilter, makerFilter, products]);

	const sortedProducts = useMemo(() => {
		return filtredProducts.sort((a, b) => {
			if (sort) {
				const { direction, type } = sort;
				const productA = direction === "asc" ? a : b;
				const productB = direction === "asc" ? b : a;

				if (type === "name") {
					return productA.name.localeCompare(productB.name);
				}
				if (type === "price") {
					return productA.price - productB.price;
				}
			}
			return 0;
		});
	}, [sort, filtredProducts]);

	const maxIndexCard = defaultCardsOnPage * +(page ?? 1);
	const minIndexCard = maxIndexCard - defaultCardsOnPage;
	const displayedCards = sortedProducts.slice(minIndexCard, maxIndexCard);
	const pages = Array.from(
		{ length: Math.ceil(sortedProducts.length / defaultCardsOnPage) },
		(v, k) => paths.catalog.replace(":page", `${k + 1}`)
	);

	return (
		<div className={styles.productWrapper}>
			<div className={styles.productCardsContainer}>
				<ul className={styles.catalogList}>
					{displayedCards.map((product) => (
						<CatalogCard
							key={product.barcode}
							productImg={product.urlImg}
							productName={product.name}
							productSizeType={product.sizeType}
							productSize={product.size}
							productBarcode={product.barcode}
							productMaker={product.maker}
							productBrand={product.brand}
							productPrice={product.price}
						/>
					))}
				</ul>
			</div>
			<Pagination pages={pages} />
		</div>
	);
};
