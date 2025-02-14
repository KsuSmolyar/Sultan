import { Dropdown } from "../../../shared/ui/Dropdown";
import styles from "../productCard.module.css";

type ProductCardDescriptionProps = {
    description: string
}

export const ProductCardDescription = ({ description }: ProductCardDescriptionProps) => {
    return (
        <Dropdown
            defaultOpen
            classNameContainer={styles.dropDownContainer}
            buttonText='Описание'
        >
            <p className={styles.descriptText}>{description}</p>
        </Dropdown>
    )
}
