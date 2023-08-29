import React from "react";
import { ButtonOrLink } from "../ui/button/button";
import { ArrowDown, Envelope, Indicator, Phone, PhoneWhite } from "../ui/icons";
import { Modal } from "../ui/modal/modal";
import styles from "./mobileMenu.module.css";

export const MobileMenu = () => {
	return (
		<Modal className={styles.backdrop}>
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
							<p>О компании</p>
							<p>Доставка и оплата</p>
							<p>Возврат</p>
							<p>Контакты</p>
						</div>
					</div>
					<ButtonOrLink className={styles.priceButton}>
						Прайс-лист <ArrowDown />
					</ButtonOrLink>
				</div>
			</div>
		</Modal>
	);
};
