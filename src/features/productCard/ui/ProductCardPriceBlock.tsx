import classNames from "classnames";
import { AddToCart } from "../../../entities/AddToCart";
import { Quantity } from "../../../shared/ui/Quantity";
import styles from "../productCard.module.css";
import { Share } from "../../../shared/ui/Icons";

type ProductCardPriceBlockProps = {
    count: number
    price: number
    setCount: React.Dispatch<React.SetStateAction<number>>
    barcode: number
}
export const ProductCardPriceBlock = ({ count, price, setCount, barcode }: ProductCardPriceBlockProps) => {
    return (
        <div className={styles.productPrice}>
            <div className={styles.priceContainerFirst}>
                <p className={styles.price}>{price} ₸</p>
                <Quantity count={count} setCount={setCount} />
            </div>
            <div className={styles.priceContainerSecond}>
                <AddToCart barcode={barcode} count={count} />
                <div
                    className={classNames(styles.shareIcon, styles.shareIconUpper)}
                >
                    <Share />
                </div>
            </div>
        </div>
    )
}
