import { Carousel } from '../carousel/carousel';
import promotionArray from '../../fileData/promotionCarouselData.json';
import { PromotionCardForCarousel } from '../../components/promotionCardForCarousel/promotionCardForCarousel';

export const PromotionCarousel = () => {
  return (
    <Carousel withButton>
      {promotionArray.map((promo, ind) => (
        <PromotionCardForCarousel
          key={ind}
          actionValidity={promo.actionValidity}
          promotionName={promo.promotionName}
          termsOfAction={promo.termsOfAction}
          urlImg={promo.urlImg}
        />
      ))}
    </Carousel>
  );
};
