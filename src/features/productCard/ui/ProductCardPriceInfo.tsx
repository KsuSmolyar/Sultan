import { Share } from "../../../shared/ui/Icons";
import { PriceDownload } from "../../../shared/ui/PriceDownload";
import styles from "../productCard.module.css";

export const ProductCardPriceInfo = () => {
    return (
        <div className={styles.priceInfo}>
            <div className={styles.shareIcon}>
                <Share />
            </div>

            <div className={styles.priceContainerThird}>
                <div className={styles.promotion}>
                    <p>
                        При покупке от <b>10 000 ₸</b> бесплатная
                        <br />
                        доставка по Кокчетаву и области
                    </p>
                </div>
                <PriceDownload />
            </div>
        </div>
    )
}
