import { Dropdown } from "../../../shared/ui/Dropdown";
import { MetaInfo } from "../../../shared/ui/MetaInfo";
import { SizeType } from "../../../store/slices/catalogSlice";
import styles from "../productCard.module.css";

type ProductCardCharacteristicsProps = {
    appointment: string[]
    maker: string
    brand: string
    barcode: number
    size: number
    sizeType: SizeType
}
export const ProductCardCharacteristics = ({ appointment, maker, brand, barcode, size, sizeType }: ProductCardCharacteristicsProps) => {
    return (
        <Dropdown
            defaultOpen
            classNameContainer={styles.dropDownContainer}
            buttonText='Характеристики'
        >
            <div className={styles.metaInfo}>
                <MetaInfo title={"Назначение"} value={appointment.join(' ')} />
                <MetaInfo title={"Производитель"} value={maker} />
                <MetaInfo title={"Бренд"} value={brand} />
                <MetaInfo title={"Штрихкод"} value={barcode.toString()} />
                <MetaInfo title={"Вес"} value={size.toString() + " " + sizeType} />
                <MetaInfo title={"Кол-во в коробке"} value={"1"} />
            </div>
        </Dropdown>
    )
}
