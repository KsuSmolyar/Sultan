import { Link } from 'react-router-dom';
import { paths } from '../../router';
import styles from './mainPage.module.css';
import { BestGoodsSection } from '../../widgets/BestGooDSection';
import { PromotionCarousel } from '../../widgets/promotionCarousel';
import { PromotionSection } from '../../widgets/PromotionSection';
import { Hero } from '../../entities/Hero';
import { CategorySection } from '../../entities/CategorySection';

export const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <Hero />
      <PromotionSection />
      <CategorySection />
      <PromotionCarousel />
      <BestGoodsSection />
      <Link className={styles.link} to={paths.admin}>
        Перейти в админку
      </Link>
    </div>
  );
};
