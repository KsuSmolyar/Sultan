import styles from '../promotionSection.module.css';
import data from '../../../fileData/promotionData.json';
import { ProductType } from '../../../store/slices/catalogSlice';
import { Subtitle } from '../../../shared/ui/Subtitle';
import { CatalogCard } from '../../../entities/CatalogCard';


export const PromotionSection = () => {
    const promoGoods = data as ProductType[];

    return (
        <section className={styles.promotion}>
            <Subtitle coloredText='Акционные' text='товары' />
            <ul className={styles.promotionList}>
                {promoGoods.map((promoGood) => (
                    <CatalogCard
                        key={promoGood.barcode}
                        productImg={promoGood.urlImg}
                        productName={promoGood.name}
                        productSizeType={promoGood.sizeType}
                        productSize={promoGood.size}
                        productBarcode={promoGood.barcode}
                        productMaker={promoGood.maker}
                        productBrand={promoGood.brand}
                        productPrice={promoGood.price}
                    />
                ))}
            </ul>
        </section>
    );
};
