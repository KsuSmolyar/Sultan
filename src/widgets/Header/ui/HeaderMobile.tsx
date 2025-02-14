import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../router';
import styles from '../headerMobile.module.css';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/hooks';
import { selectCardProductsCount } from '../../../store/slices/cartSlice';
import { addAppointmentFilter, addSort } from '../../../store/slices/catalogSlice';
import { ButtonOrLink } from '../../../shared/ui/ButtonOrLink';
import { BurgerMenu, Cart, Cross, FrameDark, Logo, MagnifierDark } from '../../../shared/ui/Icons';
import { MobileMenu } from '../../../entities/MobileMenu';

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
                        to={paths.catalog.replace(':page', '1')}
                        className={styles.headerCatalog}
                        onClick={onRemoveFilter}
                    >
                        <FrameDark />
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
