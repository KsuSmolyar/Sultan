import styles from "../productCard.module.css";

type ProductCardImageProps = {
    urlImg: string
    imgAlt: string
}
export const ProductCardImage = ({ urlImg, imgAlt }: ProductCardImageProps) => {
    return (
        <div className={styles.productImage} >
            <img className={styles.img} src={urlImg} alt={imgAlt} />
        </div >
    )
}
