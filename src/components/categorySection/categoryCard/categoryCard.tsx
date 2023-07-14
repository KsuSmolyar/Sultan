import styles from './categorycard.module.css';

export const CategoryCard = ({ name, urlImg }: CategoryCardProps) => {
  return (
    <a className={styles.categoryLink}>
      <li className={styles.categoryCard}>
        <div className={styles.categoryCardImg}>
          <img className={styles.categoryImg} src={urlImg} alt='' />
        </div>

        <p className={styles.categoryName}>{name}</p>
      </li>
    </a>
  );
};

type CategoryCardProps = {
  name: string;
  urlImg: string;
};
