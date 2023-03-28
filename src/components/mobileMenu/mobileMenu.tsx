import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { ButtonOrLink } from "../ui/button/button";
import { ArrowDown, Envelope, Indicator, Phone, PhoneWhite } from "../ui/icons";
import styles from "./mobileMenu.module.css";

export const MobileMenu = () => {
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "visible";
		};
	}, []);

	return createPortal(
		<div className={styles.backDrop}>
			<div className={styles.mobileMenu}>
				<div className={styles.upperMenuContacts}>
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

					<div className={styles.phoneContacts}>
						<div className={styles.contactsBlock}>
							<div className={styles.contactsBlockIcon}>
								<Phone />
							</div>
							<div className={styles.contactsBlockText}>
								<p className={styles.textUpper}>Отдел продаж </p>
								<p className={styles.textLower}>+7 (777) 490-00-91</p>
							</div>
						</div>
						<p className={styles.phoneContactsText}>время работы: 9:00-20:00</p>
					</div>

					<div className={styles.phoneButtons}>
						<ButtonOrLink
							className={styles.mobileMenuUpperButton}
							variant='small'
							round
						>
							<PhoneWhite />
						</ButtonOrLink>
						<button className={styles.callback}>Заказать звонок</button>
					</div>
				</div>

				<hr className={styles.hr} />

				<div className={styles.lowerMenu}>
					<div className={styles.lowerMenuContainer}>
						<p className={styles.lowerMenuTitle}>Меню сайта:</p>
						<div className={styles.lowerMenuLinks}>
							<a>О компании</a>
							<a>Доставка и оплата</a>
							<a>Возврат</a>
							<a>Контакты</a>
						</div>
					</div>
					<ButtonOrLink className={styles.priceButton}>
						Прайс-лист <ArrowDown />
					</ButtonOrLink>
				</div>
			</div>
		</div>,
		document.body
	);
};
