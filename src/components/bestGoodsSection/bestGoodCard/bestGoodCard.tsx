import styles from './bestgoodcard.module.css';

export const BestGoodCard = ({ urlImg, altImg }: BestGoodCardProps) => {
  return (
    <a className={styles.bestGoodCard}>
      <img src={urlImg} alt={altImg} />
    </a>
  );
};

type BestGoodCardProps = {
  urlImg: string;
  altImg: string;
};
