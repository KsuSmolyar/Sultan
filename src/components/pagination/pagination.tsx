import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowPaginationLeft, ArrowPaginationRight } from "../ui/icons";
import styles from "./pagination.module.css";

export const Pagination = () => {
	return (
		<div className={styles.paginationContainer}>
			<button className={styles.paginationButton}>
				<ArrowPaginationLeft />
			</button>
			<div className={styles.paginationItems}>
				<NavLink
					to='/'
					className={({ isActive }) =>
						classNames(styles.paginationItem, {
							[styles.active]: isActive,
						})
					}
				>
					1
				</NavLink>
				<NavLink
					to='/'
					className={({ isActive }) =>
						classNames(styles.paginationItem, {
							[styles.active]: isActive,
						})
					}
				>
					2
				</NavLink>
				<NavLink
					to='/'
					className={({ isActive }) =>
						classNames(styles.paginationItem, {
							[styles.active]: isActive,
						})
					}
				>
					3
				</NavLink>
			</div>
			<button className={styles.paginationButton}>
				<ArrowPaginationRight />
			</button>
		</div>
	);
};
