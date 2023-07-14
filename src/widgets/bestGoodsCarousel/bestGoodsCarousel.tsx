import styles from './bestgoodscarousel.module.css';
import { Carousel } from '../carousel/carousel';
import data from '../../fileData/bestGoodsData.json';
import { BestGoodCard } from '../../components/bestGoodsSection/bestGoodCard/bestGoodCard';

export const BestGoodsCarousel = () => {
  return (
    <Carousel
      carouselClassName={styles.bestGoodsCarousel}
      carouselContainerClassName={styles.bestGoodsCarouselContainer}
      scrollMultipleItems
    >
      {data.map((item, ind) => (
        <BestGoodCard key={ind} urlImg={item.urlImg} altImg={item.name} />
      ))}
    </Carousel>
  );
};
