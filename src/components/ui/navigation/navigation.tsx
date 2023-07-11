import React from 'react';
import styles from './navigation.module.css';
import classNames from 'classnames';

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
        <li>
          <a href='/'>О компании</a>
        </li>
        <li>
          <a href='/'>Доставка и оплата</a>
        </li>
        <li>
          <a href='/'>Возврат</a>
        </li>
        <li>
          <a href='/'>Контакты</a>
        </li>
      </ul>
    </nav>
  );
};

type NavigationProps = {
  direction?: 'row' | 'column';
  className?: string;
};
