import { Bottle, Box } from "../../../shared/ui/Icons";
import { SizeType } from "../../../store/slices/catalogSlice";
import styles from "../productCard.module.css";

type ProductCardDescriptionHeaderProps = {
    brand: string
    name: string
    size: number
    sizeType: SizeType
}
export const ProductCardDescriptionHeader = ({ brand, name, size, sizeType }: ProductCardDescriptionHeaderProps) => {
    const typeSizeIcon = sizeType === 'мл' ? <Bottle /> : <Box />;

    return (
        <div className={styles.descriptionHeader}>
            <p className={styles.isAvailable}>В наличии</p>
            <p className={styles.descriptionTitle}>
                <b>{brand}</b> {name}
            </p>
            <p className={styles.packageType}>
                {typeSizeIcon} {size}
                {sizeType}
            </p>
        </div>
    )
}
