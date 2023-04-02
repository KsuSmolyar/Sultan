import React from "react";
import styles from "./header.module.css";
import { ButtonOrLink } from "../ui/button/button";
import { InputSearch } from "../ui/inputSearch/inputSearch";
import { UseMedia } from "../../hooks/useMedia";
import { paths } from "../../router";
import { Link } from "react-router-dom";
import {
	ArrowDown,
	Cart,
	Envelope,
	FrameWhite,
	Indicator,
	Logo,
} from "../ui/icons";
import consultImg from "./consult.png";
import { addAppointmentFilter, addSort } from "../../store/slices/catalogSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
	selectCardProductsCount,
	selectResultSum,
} from "../../store/slices/cartSlise";
import classNames from "classnames";

export const Header = React.memo(() => {
	const table = UseMedia("(max-width: 1024px)");
	const cardProductsCount = useAppSelector(selectCardProductsCount);
	const resultSum = useAppSelector(selectResultSum);
	const dispatch = useAppDispatch();

	const onRemoveFilter = () => {
		dispatch(addAppointmentFilter(null));
		dispatch(addSort(null));
	};

	return (
		<header className={styles.header}>
			<div className={styles.headerUpper}>
				<div className={styles.headerUpperContacts}>
					<div className={styles.contactsBlock}>
						<div className={styles.contactsBlockIcon}>
							<Indicator />
						</div>
						<div className={styles.contactsBlockText}>
							<p className={styles.textUpper}>
								г. Кокчетав, ул. Ж. Ташенова 129Б
							</p>
							<p className={styles.textLower}>(Рынок Восточный)</p>
						</div>
					</div>
					<div className={styles.contactsBlock}>
						<div className={styles.contactsBlockIcon}>
							<Envelope />
						</div>
						<div className={styles.contactsBlockText}>
							<p className={styles.textUpper}>opt.sultan@mail.ru </p>
							<p className={styles.textLower}>На связи в любое время</p>
						</div>
					</div>
				</div>
				<div className={styles.headerUpperInfo}>
					<a href='/'>О компании</a>
					<a href='/'>Доставка и оплата</a>
					<a href='/'>Возврат</a>
					<a href='/'>Контакты</a>
				</div>
			</div>

			<hr />

			<div className={styles.headerLower}>
				<Link to={paths.main} className={styles.headerLowerLogo}>
					<Logo />
				</Link>
				<ButtonOrLink
					to={paths.catalog.replace(":page", "1")}
					className={styles.catalogButton}
					variant={table ? "secondary" : "primary"}
					onClick={onRemoveFilter}
				>
					Каталог <FrameWhite />
				</ButtonOrLink>

				<InputSearch
					classNameLabel={styles.searchLabel}
					placeholder='Поиск...'
					variant={table ? "small" : "primary"}
				/>

				<div className={styles.headerLowerPhone}>
					<div className={styles.phoneInfo}>
						<p className={styles.phoneNumber}>+7 (777) 490-00-91</p>
						<p className={styles.workingHours}>время работы: 9:00-20:00</p>
						<button className={styles.callback}>Заказать звонок</button>
					</div>
					<div>
						<img src={consultImg} alt='' />
					</div>
				</div>

				<ButtonOrLink
					className={styles.priceButton}
					variant={table ? "secondary" : "primary"}
				>
					Прайс-лист <ArrowDown />
				</ButtonOrLink>

				<div className={styles.headerLowerCart}>
					<Link
						to={paths.cart}
						className={classNames(styles.cartIcon, {
							[styles.empty]: cardProductsCount === 0,
						})}
						data-count={cardProductsCount}
					>
						<Cart />
					</Link>
					<div className={styles.cartBlock}>
						<p className={styles.cartText}>Корзина</p>
						<p className={styles.cartPrice}>{resultSum} ₸ </p>
					</div>
				</div>
			</div>
			<hr />
		</header>
	);
});
