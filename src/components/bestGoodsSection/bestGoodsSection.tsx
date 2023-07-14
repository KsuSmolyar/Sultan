import { SubTitle } from '../ui/subTitle/subTitle';
import styles from './bestgoodsection.module.css';
// import data from '../../fileData/bestGoodsData.json';
import { BestGoodsCarousel } from '../../widgets/bestGoodsCarousel/bestGoodsCarousel';

export const BestGoodsSection = () => {
  return (
    <section className={styles.BestGoodsSection}>
      <SubTitle
        coloredText='лучшие'
        text='товары'
        subCaptionText='От ведущих мировых брендов'
      />
      <BestGoodsCarousel />
    </section>
  );
};
