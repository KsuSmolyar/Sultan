import { useState } from "react";
import styles from "../productCard.module.css";
import { ProductType } from "../../../store/slices/catalogSlice";
import { ProductCardDescriptionHeader } from "./ProductCardDescriptionHeader";
import { ProductCardImage } from "./ProductCardImage";
import { ProductCardCharacteristics } from "./ProductCardCharacteristics";
import { ProductCardMetaInfo } from "./ProductCardMetaInfo";
import { ProductCardPriceInfo } from "./ProductCardPriceInfo";
import { ProductCardDescription } from "./ProductCardDescription";
import { ProductCardPriceBlock } from "./ProductCardPriceBlock";

export const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
    const [count, setCount] = useState(1);

    return (
        <div className={styles.productCard}>
            <ProductCardImage urlImg={product.urlImg} imgAlt={product.name} />
            <div className={styles.productDescriptions}>
                <ProductCardDescriptionHeader
                    brand={product.brand}
                    name={product.name}
                    size={product.size}
                    sizeType={product.sizeType}
                />
                <ProductCardPriceBlock price={product.price} count={count} setCount={setCount} barcode={product.barcode} />
                <ProductCardPriceInfo />
                <ProductCardMetaInfo maker={product.maker} brand={product.brand} barcode={product.barcode} />
                <ProductCardDescription description={product.description} />
                <hr className={styles.hr} />
                <ProductCardCharacteristics
                    appointment={product.appointment}
                    barcode={product.barcode}
                    brand={product.brand}
                    maker={product.maker}
                    size={product.size}
                    sizeType={product.sizeType}
                />
            </div>
        </div>
    )
}
