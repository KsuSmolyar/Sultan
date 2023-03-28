import classNames from "classnames";
import React, { useState } from "react";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { ButtonBack } from "../../components/buttonBack/buttonBack";
import { List } from "../../components/catalogList/list/list";
import { Pagination } from "../../components/pagination/pagination";
import { Sidebar } from "../../components/sidebar/sidebar";
import { UseMedia } from "../../hooks/useMedia";
import styles from "./catalog.module.css";

const sortList = ["Название А-Я", "Название Я-А", "Цена ↓", "Цена ↑"];
export const Catalog = () => {
	const [show, setShow] = useState(false);
	const [sortType, setSortType] = useState(sortList[0]);
	const onClick = () => {
		setShow((prev) => !prev);
	};

	const onSortItemClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
		const currentIndex = +event.currentTarget.dataset.index!;
		setSortType(sortList[currentIndex]);
		onClick();
	};
	const mobile = UseMedia("(max-width: 521px)");
	return (
		<div className={styles.catalogContainer}>
			{mobile ? (
				<ButtonBack />
			) : (
				<Breadcrumbs crumbs={[{ title: "Каталог", link: "catalog" }]} />
			)}

			<div className={styles.catalogHeader}>
				<div className={styles.catalogHeaderUpper}>
					<h2 className={styles.catalogTitle}>Косметика и гигиена</h2>
					<div className={styles.catalogSort}>
						<p className={styles.catalogSortTitle}>Сортировка:</p>
						<button
							className={classNames(styles.catalogSortButton, {
								[styles.open]: show,
							})}
							onClick={onClick}
						>
							{sortType} <img src='Polygon 5.svg' alt='стрелка вниз' />
						</button>
						<div
							className={classNames(styles.sortContainer, {
								[styles.show]: show,
							})}
						>
							{sortList.map((sortItem, index) => (
								<p
									className={classNames(styles.sortItem, {
										[styles.checked]: sortList[index] === sortType,
									})}
									data-index={index}
									onClick={onSortItemClick}
								>
									{sortItem}
								</p>
							))}
						</div>
					</div>
				</div>
				<div className={styles.catalogHeaderLower}>
					<button className={styles.sortButton}>
						Уход
						<br />
						за телом
					</button>
					<button className={styles.sortButton}>
						Уход
						<br />
						за руками
					</button>
					<button className={styles.sortButton}>
						Уход
						<br />
						за ногами
					</button>
					<button className={styles.sortButton}>
						Уход
						<br />
						за лицом
					</button>
					<button className={styles.sortButton}>
						Уход
						<br />
						за волосами
					</button>
					<button className={styles.sortButton}>
						Средства
						<br />
						для загара
					</button>
					<button className={styles.sortButton}>
						Средства
						<br />
						для бритья
					</button>
					<button className={styles.sortButton}>
						Подарочные
						<br />
						наборы
					</button>
					<button className={styles.sortButton}>
						Гигиеническая
						<br />
						продукция
					</button>
					<button className={styles.sortButton}>
						Гигиена
						<br />
						полости рта
					</button>
					<button className={styles.sortButton}>
						Бумажная
						<br />
						продукция
					</button>
				</div>
			</div>
			<div className={styles.catalogMain}>
				<Sidebar />
				<div className={styles.productWrapper}>
					<div className={styles.productCardsContainer}>
						<List />
					</div>
					<Pagination />
				</div>
			</div>
		</div>
	);
};
