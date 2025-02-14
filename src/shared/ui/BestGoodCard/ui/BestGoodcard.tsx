import styles from '../bestGoodcard.module.css';

export const BestGoodCard = ({ urlImg, altImg }: BestGoodCardProps) => {
    return (
        <div className={styles.bestGoodCard}>
            <img src={urlImg} alt={altImg} />
        </div>
    );
};

type BestGoodCardProps = {
    urlImg: string;
    altImg: string;
};
