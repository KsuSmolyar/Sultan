import classNames from "classnames";
import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { ArrowPaginationLeft, ArrowPaginationRight } from "../ui/icons";
import styles from "./pagination.module.css";

export const Pagination: React.FC<{ pages: string[] }> = ({ pages }) => {
	const { page } = useParams<{ page: string }>();
	const navigate = useNavigate();
	const currentPage = +(page ?? 1);

	const onPrevPage = () => {
		const prevPage = currentPage - 1;
		navigate(`/${pages[prevPage - 1]}`);
	};

	const onNextPage = () => {
		navigate(`/${pages[currentPage]}`);
	};

	if (pages.length <= 1) {
		return null;
	}

	return (
		<div className={styles.paginationContainer}>
			<button
				className={styles.paginationButton}
				onClick={onPrevPage}
				disabled={currentPage === 1}
			>
				<ArrowPaginationLeft />
			</button>
			<div className={styles.paginationItems}>
				{pages.map((page, index) => (
					<NavLink
					key={index}
						to={`/${page}`}
						className={({ isActive }) =>
							classNames(styles.paginationItem, {
								[styles.active]: isActive,
							})
						}
					>
						{index + 1}
					</NavLink>
				))}
			</div>
			<button
				className={styles.paginationButton}
				onClick={onNextPage}
				disabled={currentPage === pages.length}
			>
				<ArrowPaginationRight />
			</button>
		</div>
	);
};
