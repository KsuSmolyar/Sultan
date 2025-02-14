import { BestGoodCard } from '../../../shared/ui/BestGoodCard';
import { Carousel } from '../../../shared/ui/Carousel';
import styles from '../bestgoodscarousel.module.css';

type BestGoodsCarouselProps = {
    cardData: BestGood[]
}

type BestGood = {
    name: string,
    urlImg: string
}
export const BestGoodsCarousel = ({ cardData }: BestGoodsCarouselProps) => {
    return (
        <Carousel
            carouselClassName={styles.bestGoodsCarousel}
            carouselContainerClassName={styles.bestGoodsCarouselContainer}
            scrollMultipleItems
            withButton
        >
            {cardData.map((item, ind) => (
                <BestGoodCard key={ind} urlImg={item.urlImg} altImg={item.name} />
            ))}
        </Carousel>
    );
};
