import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../router";
import { MobileMenu } from "../mobileMenu/mobileMenu";
import { ButtonOrLink } from "../ui/button/button";
import {
	BurgerMenu,
	Cart,
	Cross,
	FrameDarc,
	Logo,
	MagnifierDark,
} from "../ui/icons";
import styles from "./headerMobile.module.css";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectCardProductsCount } from "../../store/slices/cartSlise";
import { addAppointmentFilter, addSort } from "../../store/slices/catalogSlice";

export const HeaderMobile = () => {
	const [showMenu, setShowMenu] = useState(false);
	const cardProductsCount = useAppSelector(selectCardProductsCount);

	const toggleShowMenu = useCallback(() => {
		setShowMenu((prev) => !prev);
	}, []);

	const dispatch = useAppDispatch();

	const onRemoveFilter = () => {
		dispatch(addAppointmentFilter(null));
		dispatch(addSort(null));
	};
	return (
		<>
			<header className={styles.header}>
				<div className={styles.headerUpper}>
					<ButtonOrLink
						className={styles.headerUpperButton}
						onClick={toggleShowMenu}
						variant='small'
						round
					>
						{showMenu ? <Cross /> : <BurgerMenu />}
					</ButtonOrLink>
					<Link to='/'>
						<Logo className={styles.headerLogo} />
					</Link>
					<Link
						to={paths.cart}
						className={classNames(styles.cartButton, {
							[styles.empty]: cardProductsCount === 0,
						})}
						data-count={cardProductsCount}
					>
						<Cart />
					</Link>
				</div>
				<hr className={styles.hr} />
				<div className={styles.headerLower}>
					<Link
						to={paths.catalog.replace(":page", "1")}
						className={styles.headerCatalog}
						onClick={onRemoveFilter}
					>
						<FrameDarc />
						<p>Каталог</p>
					</Link>
					<button className={styles.headerSearchButton}>
						<MagnifierDark />
						Поиск
					</button>
				</div>
				<hr className={styles.hr} />
			</header>
			{showMenu && <MobileMenu />}
		</>
	);
};
