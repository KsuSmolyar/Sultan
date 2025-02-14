import React from 'react';
import styles from '../header.module.css';
import { UseMedia } from '../../../shared/hooks/useMedia';
import { paths } from '../../../router';
import { Link } from 'react-router-dom';
import consultImg from '../consult.png';
import { addAppointmentFilter, addSort } from '../../../store/slices/catalogSlice';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/hooks';
import {
    selectCardProductsCount,
    selectResultSum,
} from '../../../store/slices/cartSlice';
import classNames from 'classnames';
import { ArrowDown, Cart, Envelope, FrameWhite, Indicator } from '../../../shared/ui/Icons';
import { Caption } from '../../../shared/ui/Caption';
import { Navigation } from '../../../shared/ui/Navigation';
import { InputSearch } from '../../../entities/InputSearch';
import { ContactsBlock } from '../../../shared/ui/ContactsBlock';
import { ButtonOrLink } from '../../../shared/ui/ButtonOrLink';
import { Logotype } from '../../../shared/ui/Logo';

export const Header = React.memo(() => {
    const table = UseMedia('(max-width: 1024px)');
    const cardProductsCount = useAppSelector(selectCardProductsCount);
    const resultSum = useAppSelector(selectResultSum);
    const dispatch = useAppDispatch();

    const onRemoveFilter = () => {
        dispatch(addAppointmentFilter(null));
        dispatch(addSort(null));
    };

    return (
        <header className={styles.header}>
            <div className={styles.wrapperInner}>
                <div className={styles.headerUpper}>
                    <div className={styles.headerUpperContacts}>
                        <div className={styles.contactsBlock}>
                            <div className={styles.contactsBlockIcon}>
                                <Indicator />
                            </div>
                            <Caption
                                textUpper='г. Кокчетав, ул. Ж. Ташенова 129Б'
                                textLower='(Рынок Восточный)'
                            />
                        </div>
                        <div className={styles.contactsBlock}>
                            <div className={styles.contactsBlockIcon}>
                                <Envelope />
                            </div>
                            <Caption
                                textUpper='opt.sultan@mail.ru '
                                textLower='На связи в любое время'
                            />
                        </div>
                    </div>
                    <Navigation className={styles.nav} />
                </div>

                <hr />

                <div className={styles.headerLower}>
                    <Logotype />
                    <ButtonOrLink
                        to={paths.catalog.replace(':page', '1')}
                        className={styles.catalogButton}
                        variant={table ? 'secondary' : 'primary'}
                        onClick={onRemoveFilter}
                    >
                        Каталог <FrameWhite />
                    </ButtonOrLink>

                    <InputSearch
                        classNameLabel={styles.searchLabel}
                        placeholder='Поиск...'
                        variant={table ? 'small' : 'primary'}
                    />

                    <div className={styles.headerLowerPhone}>
                        <ContactsBlock />
                        <img src={consultImg} alt='изображение консультанта' />
                    </div>

                    <ButtonOrLink
                        className={styles.priceButton}
                        variant={table ? 'secondary' : 'primary'}
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
            </div>
        </header>
    );
});
