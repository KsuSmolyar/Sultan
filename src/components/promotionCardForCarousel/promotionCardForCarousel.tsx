import styles from './promotioncardforcarousel.module.css';
import { ButtonOrLink } from '../ui/button/button';

export const PromotionCardForCarousel = ({
  actionValidity,
  promotionName,
  termsOfAction,
  urlImg,
}: PromotionCardForCarouselProps) => {
  return (
    <div className={styles.slider}>
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

type PromotionCardForCarouselProps = {
  actionValidity: string;
  promotionName: string;
  termsOfAction: string;
  urlImg: string;
};
