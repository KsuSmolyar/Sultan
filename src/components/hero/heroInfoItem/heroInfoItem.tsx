import React from 'react';
import styles from './heroinfoitem.module.css';

export const HeroInfoItem = ({
  textUpper,
  textLower,
  boldText,
}: HeroInfoItemProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>+</div>
      <div className={styles.infoContainer}>
        <p>{textUpper}</p>
        <p>
          {textLower} <b>{boldText}</b>
        </p>
      </div>
    </div>
  );
};

type HeroInfoItemProps = {
  textUpper: string;
  textLower: string;
  boldText?: string;
};
