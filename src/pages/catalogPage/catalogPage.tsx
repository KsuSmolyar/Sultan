import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { ButtonBack } from "../../components/buttonBack/buttonBack";
import { List } from "../../components/catalogList/list/list";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Polygon5 } from "../../components/ui/icons";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { UseMedia } from "../../hooks/useMedia";
import { paths } from "../../router";
import {
	addAppointmentFilter,
	addSort,
	appointmentFilters,
	initMakers,
	selectAppointment,
	SortType,
} from "../../store/slices/catalogSlice";
import styles from "./catalogPage.module.css";

const sortList: SortType[] = [
	{ title: "Название А-Я", type: "name", direction: "asc" },
	{ title: "Название Я-А", type: "name", direction: "desc" },
	{ title: "Цена ↓", type: "price", direction: "desc" },
	{ title: "Цена ↑", type: "price", direction: "asc" },
];

export const CatalogPage = () => {
	const mobile = UseMedia("(max-width: 521px)");
	const [show, setShow] = useState(false);
	const [sortType, setSortType] = useState(sortList[0]);

	const filterAppointment = useAppSelector(selectAppointment);

	const dispatch = useAppDispatch();

	const onClick = () => {
		setShow((prev) => !prev);
	};

	const onAddFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
		const filterIndex = event.currentTarget.dataset.index;
		if (filterIndex) {
			dispatch(addAppointmentFilter(appointmentFilters[+filterIndex]));
		}
	};

	const onSortItemClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
		const currentIndex = event.currentTarget.dataset.index;
		if (currentIndex) {
			setSortType(sortList[+currentIndex]);
			dispatch(addSort(sortList[+currentIndex]));
			onClick();
		}
	};

	useEffect(() => {
		dispatch(initMakers());
	}, [dispatch]);

	return (
		<div className={styles.catalogContainer}>
			{mobile ? (
				<ButtonBack className={styles.buttonBackContainer} />
			) : (
				<Breadcrumbs
					crumbs={[
						{ title: "Каталог", link: paths.catalog.replace(":page", "1") },
					]}
				/>
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
							{sortType.title} <Polygon5 />
						</button>
						<div
							className={classNames(styles.sortContainer, {
								[styles.show]: show,
							})}
						>
							{sortList.map((sortItem, index) => (
								<p
									key={sortItem.title}
									className={classNames(styles.sortItem, {
										[styles.checked]: sortList[index].title === sortType.title,
									})}
									data-index={index}
									onClick={onSortItemClick}
								>
									{sortItem.title}
								</p>
							))}
						</div>
					</div>
				</div>

				<div className={styles.catalogHeaderLower}>
					{appointmentFilters.map((filter, index) => (
						<button
							className={classNames(styles.sortButton, {
								[styles.selected]: filterAppointment === filter,
							})}
							key={filter}
							data-index={index}
							onClick={onAddFilter}
						>
							{filter}
						</button>
					))}
				</div>
			</div>
			<div className={styles.catalogMain}>
				<Sidebar />

				<List />
			</div>
		</div>
	);
};
