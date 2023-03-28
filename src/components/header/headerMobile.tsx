import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../paths";
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

export const HeaderMobile = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleShowMenu = useCallback(() => {
		setShowMenu((prev) => !prev);
	}, []);

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
					<Link to={paths.cart} className={styles.cartButton}>
						<Cart />
					</Link>
				</div>
				<hr className={styles.hr} />
				<div className={styles.headerLower}>
					<Link to={paths.catalog} className={styles.headerCatalog}>
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
