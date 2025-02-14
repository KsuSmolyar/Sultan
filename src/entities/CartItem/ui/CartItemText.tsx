import { Bottle, Box } from "../../../shared/ui/Icons";
import { SizeType } from "../../../store/slices/catalogSlice";
import styles from "../cartItem.module.css";

type CartItemTextProps = {
    sizeType: SizeType
    size: number
    brand: string
    name: string
    description: string
}
export const CartItemText = ({ sizeType, size, brand, name, description }: CartItemTextProps) => {
    const typeSizeIcon =
        sizeType === 'мл' ? (
            <Bottle className={styles.packageTare} />
        ) : (
            <Box className={styles.packageTare} />
        );

    return (
        <div className={styles.textContainer}>
            <div className={styles.packageType}>
                {typeSizeIcon}
                <p>
                    {size} {sizeType}
                </p>
            </div>
            <p className={styles.packageTypeTitle}>
                {brand} {name}
            </p>
            <p className={styles.packageTypeDescript}>{description}</p>
        </div>
    )
}
