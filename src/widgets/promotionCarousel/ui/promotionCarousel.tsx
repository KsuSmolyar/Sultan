
import promotionArray from '../../../fileData/promotionCarouselData.json';
import { Carousel } from '../../../shared/ui/Carousel';
import { PromotionCard } from '../../../entities/PromotionCard';

export const PromotionCarousel = () => {
  return (
    <Carousel withButton>
      {promotionArray.map((promo, ind) => (
        <PromotionCard
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
