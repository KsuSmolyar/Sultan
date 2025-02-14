import { ButtonOrLink } from "../../ButtonOrLink";
import { ArrowDown, ArrowPriceDark } from "../../Icons";
import styles from "../priceDownload.module.css";

type PriceDownloadProps = {
    variant?: "transparent" | "primary"
}
export const PriceDownload = ({ variant = "transparent" }: PriceDownloadProps) => {
    if (variant === "transparent") {
        return (
            <button className={styles.buttonPriceList}>
                Прайс-лист <ArrowPriceDark />
            </button>
        )
    }

    return (
        <ButtonOrLink className={styles.footerButton}>
            Прайс-лист <ArrowDown />
        </ButtonOrLink>
    )
}
