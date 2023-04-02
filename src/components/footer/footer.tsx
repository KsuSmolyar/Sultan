import classNames from "classnames";
import React from "react";
import { ButtonOrLink } from "../ui/button/button";
import {
	ArrowDown,
	ArrowRight,
	LogoWhite,
	Mastercard,
	Telegram,
	Visa,
	WhatsUp,
} from "../ui/icons";
import { InputSearch } from "../ui/inputSearch/inputSearch";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { paths } from "../../router";

export const Footer = React.memo(() => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContainer}>
				<div className={styles.footerWrapper}>
					<div className={styles.footerAbout}>
						<div className={styles.aboutContainer}>
							<Link to={paths.main} className={styles.footerLogo}>
								<LogoWhite />
							</Link>
							<ButtonOrLink className={styles.footerLogoButton}>
								<div className={styles.textButton}>Прайс-лист</div> <ArrowDown />
							</ButtonOrLink>
						</div>
						<p className={styles.footerAboutText}>
							Компания «Султан» — снабжаем розничные магазины товарами "под
							ключ" в Кокчетаве и Акмолинской области
						</p>
						<div className={styles.footerSearch}>
							<p className={styles.footerSearchText}>
								Подпишись на скидки и акции
							</p>
							<InputSearch
								classNameLabel={styles.footerInputSearch}
								placeholder='Введите ваш E-mail'
							>
								<ArrowRight />
							</InputSearch>
						</div>
					</div>

					<div className={styles.menuContainer}>
						<div
							className={classNames(styles.footerMenu, styles.footerMenuOne)}
						>
							<p className={styles.footerMenuText}>Меню сайта:</p>
							<div className={styles.footerMenuLinks}>
								<a>О компании</a>
								<a>Доставка и оплата</a>
								<a>Возврат</a>
								<a>Контакты</a>
							</div>
						</div>

						<div
							className={classNames(styles.footerMenu, styles.footerMenuTwo)}
						>
							<p className={styles.footerMenuText}>Категории:</p>
							<div className={styles.footerMenuLinks}>
								<a>Бытовая химия</a>
								<a>Косметика и гигиена</a>
								<a>Товары для дома</a>
								<a>Товары для детей и мам</a>
								<a>Посуда</a>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.priceContactsContainer}>
					<div className={styles.footerPriceList}>
						<div className={styles.buttonContainer}>
							<p className={styles.footerMenuText}>Скачать прайс-лист:</p>
							<ButtonOrLink className={styles.footerButton}>
								Прайс-лист <ArrowDown />
							</ButtonOrLink>
						</div>
						<div className={styles.contactsContainer}>
							<p>Связь в мессенджерах:</p>
							<div className={styles.contactsIcon}>
								<WhatsUp />
								<Telegram />
							</div>
						</div>
					</div>

					<div className={styles.footerContacts}>
						<p className={styles.footerMenuText}>Контакты:</p>
						<div className={styles.phoneInfo}>
							<p className={styles.phoneNumber}>+7 (777) 490-00-91</p>
							<p className={styles.workingHours}>время работы: 9:00-20:00</p>
							<button className={styles.callback}>Заказать звонок</button>
						</div>

						<div className={styles.contactsBlockText}>
							<p className={styles.textUpper}>opt.sultan@mail.ru </p>
							<p className={styles.textLower}>На связи в любое время</p>
						</div>

						<div className={styles.paymentLogo}>
							<Visa />
							<Mastercard />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
});
