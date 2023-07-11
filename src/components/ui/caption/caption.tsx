import React from 'react';
import styles from './caption.module.css';
import classNames from 'classnames';

export const Caption = ({
  className,
  textUpper,
  textLower,
  variant = 'dark',
}: CaptionProps) => {
  return (
    <ul className={classNames(styles.caption, className)}>
      <li
        className={classNames(styles.textUpper, {
          [styles.darkUpper]: variant === 'dark',
          [styles.lightUpper]: variant === 'light',
        })}
      >
        {textUpper}
      </li>
      <li
        className={classNames(styles.textLower, {
          [styles.darkLower]: variant === 'dark',
          [styles.lightLower]: variant === 'light',
        })}
      >
        {textLower}
      </li>
    </ul>
  );
};

type CaptionProps = {
  className?: string;
  textUpper: string;
  textLower: string;
  variant?: 'light' | 'dark';
};
