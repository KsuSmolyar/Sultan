import { Link } from 'react-router-dom';
import styles from '../navigation.module.css';
import classNames from 'classnames';
import { paths } from '../../../../router';
import { UserIcon } from '../../Icons';

export const Navigation = ({
    direction = 'row',
    className,
}: NavigationProps) => {
    return (
        <nav className={classNames(styles.nav, className)}>
            <ul
                className={classNames({
                    [styles.navListRow]: direction === 'row',
                    [styles.navListColumn]: direction === 'column',
                })}
            >
                <li className={classNames(styles.navListItem, {
                    [styles.navItemRow]: direction === 'row',
                    [styles.navItemColumn]: direction === 'column'
                })}>
                    <Link className={styles.navListLink} to={paths.about}>О компании</Link>
                </li>
                <li className={classNames(styles.navListItem, {
                    [styles.navItemRow]: direction === 'row',
                    [styles.navItemColumn]: direction === 'column'
                })}>
                    <Link className={styles.navListLink} to={paths.delivery}>Доставка и оплата</Link>
                </li>
                <li className={classNames(styles.authorizationLinkContainer, styles.navListItem, {
                    [styles.navItemRow]: direction === 'row',
                    [styles.navItemColumn]: direction === 'column'
                })}>
                    <Link className={classNames(styles.authorizationLink, styles.navListLink)} to={paths.authorization}>
                        <UserIcon className={classNames({
                            [styles.userIconRow]: direction === 'row',
                            [styles.userIconColumn]: direction === 'column'
                        })} />
                        <span>Войти</span>
                    </Link>
                </li>
                <li className={classNames(styles.navListItem, {
                    [styles.navItemRow]: direction === 'row',
                    [styles.navItemColumn]: direction === 'column'
                })}>
                    <Link className={styles.navListLink} to={paths.contacts}>Контакты</Link>
                </li>
            </ul>
        </nav>
    );
};

type NavigationProps = {
    direction?: 'row' | 'column';
    className?: string;
};
