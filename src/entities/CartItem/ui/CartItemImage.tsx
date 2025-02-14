import styles from "../cartItem.module.css";

type CartItemImageProps = {
    urlImg: string
}
export const CartItemImage = ({ urlImg }: CartItemImageProps) => {
    return (
        <div className={styles.cartItemImageContainer}>
            <img
                className={styles.cartItemImage}
                src={urlImg}
                alt='изображение товара'
            />
        </div>
    )
}
