import { BestGoodsCarousel } from '../../../entities/BestGoodsCarousel';
import { Subtitle } from '../../../shared/ui/Subtitle';
import styles from '../bestgoodsection.module.css';
import data from '../../../fileData/bestGoodsData.json';

export const BestGoodsSection = () => {
    return (
        <section className={styles.BestGoodsSection}>
            <Subtitle
                coloredText='лучшие'
                text='товары'
                subCaptionText='От ведущих мировых брендов'
                className={styles.subTitle}
            />
            <BestGoodsCarousel cardData={data} />
        </section>
    );
};
