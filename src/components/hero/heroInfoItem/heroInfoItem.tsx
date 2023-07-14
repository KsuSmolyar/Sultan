import styles from './heroinfoitem.module.css';

export const HeroInfoItem = ({
  textUpper,
  textLower,
  boldText,
}: HeroInfoItemProps) => {
  return (
    <div className={styles.heroInfoItem}>
      <div className={styles.icon}>+</div>
      <p className={styles.textUpper}>{textUpper}</p>
      <p className={styles.textLower}>
        {textLower} <b>{boldText}</b>
      </p>
    </div>
  );
};

type HeroInfoItemProps = {
  textUpper: string;
  textLower: string;
  boldText?: string;
};
