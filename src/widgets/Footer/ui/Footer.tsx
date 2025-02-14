import classNames from 'classnames';
import React from 'react';
import styles from '../footer.module.css';
import { Mastercard, Telegram, Visa, WhatsUp } from '../../../shared/ui/Icons';
import { Navigation } from '../../../shared/ui/Navigation';
import { ContactsBlock } from '../../../shared/ui/ContactsBlock';
import { Caption } from '../../../shared/ui/Caption';
import { FooterAbout } from './FooterAbout';
import { PriceDownload } from '../../../shared/ui/PriceDownload';

export const Footer = React.memo(() => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerWrapper}>
                    <FooterAbout />

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
                            <PriceDownload variant="primary" />
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
