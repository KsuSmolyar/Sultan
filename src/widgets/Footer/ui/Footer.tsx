import classNames from 'classnames';
import React from 'react';
import styles from '../footer.module.css';
import { Link } from 'react-router-dom';
import { paths } from '../../../router';
import { ArrowDown, ArrowRight, LogoWhite, Mastercard, Telegram, Visa, WhatsUp } from '../../../shared/ui/Icons';
import { ButtonOrLink } from '../../../shared/ui/ButtonOrLink';
import { InputSearch } from '../../../entities/InputSearch';
import { Navigation } from '../../../shared/ui/Navigation';
import { ContactsBlock } from '../../../shared/ui/ContactsBlock';
import { Caption } from '../../../shared/ui/Caption';

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
                                <div className={styles.textButton}>Прайс-лист</div>{' '}
                                <ArrowDown />
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
                            <Navigation direction='column' />
                        </div>

                        <div
                            className={classNames(styles.footerMenu, styles.footerMenuTwo)}
                        >
                            <p className={styles.footerMenuText}>Категории:</p>
                            <ul className={styles.footerMenuLinks}>
                                <li>
                                    Бытовая химия
                                </li>
                                <li>
                                    Косметика и гигиена
                                </li>
                                <li>
                                    Товары для дома
                                </li>
                                <li>
                                    Товары для детей и мам
                                </li>
                                <li>
                                    Посуда
                                </li>
                            </ul>
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
                        <ContactsBlock variant='light' />

                        <Caption
                            variant='light'
                            textUpper='opt.sultan@mail.ru'
                            textLower='На связи в любое время'
                        />

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
