import { Link } from 'react-router-dom';
import { paths } from '../../router';
import styles from './mainPage.module.css';
import { Hero } from '../../components/hero/hero';
import { PromotionSection } from '../../components/promotionSection/promotionSection';
import { CategorySection } from '../../components/categorySection/categorySection';
import { BestGoodsSection } from '../../components/bestGoodsSection/bestGoodsSection';
import { PromotionCarousel } from '../../widgets/promotionCarousel/promotionCarousel';

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
