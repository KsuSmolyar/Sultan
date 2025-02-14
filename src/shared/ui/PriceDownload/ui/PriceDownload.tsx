import { ArrowPriceDark } from "../../Icons";
import styles from "../priceDownload.module.css";

export const PriceDownload = () => {
    return (
        <button className={styles.buttonPriceList}>
            Прайс-лист <ArrowPriceDark />
        </button>
    )
}
