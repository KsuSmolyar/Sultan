import { ButtonOrLink } from '../../../shared/ui/ButtonOrLink';
import styles from '../promotionCard.module.css';

export const PromotionCard = ({
    actionValidity,
    promotionName,
    termsOfAction,
    urlImg,
}: PromotionCardProps) => {
    return (
        <div className={styles.promotionCard}>
            <div className={styles.sliderInfo}>
                <p className={styles.actionValidity}>{actionValidity}</p>
                <h2 className={styles.promotionName}>{promotionName}</h2>
                <p className={styles.termsOfAction}>{termsOfAction}</p>
                <ButtonOrLink className={styles.button}>ПРИНЯТЬ УЧАСТИЕ</ButtonOrLink>
            </div>
            <img className={styles.sliderImg} src={urlImg} alt='' />
        </div>
    );
};

type PromotionCardProps = {
    actionValidity: string;
    promotionName: string;
    termsOfAction: string;
    urlImg: string;
};
