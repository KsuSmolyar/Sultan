import styles from '../hero.module.css';

export const HeroItem = ({
    textUpper,
    textLower,
    boldText,
}: HeroItemProps) => {
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

type HeroItemProps = {
    textUpper: string;
    textLower: string;
    boldText?: string;
};
