import { MetaInfo } from "../../../shared/ui/MetaInfo";
import styles from "../productCard.module.css";

type ProductCardMetaInfoProps = {
    maker: string
    brand: string
    barcode: number
}
export const ProductCardMetaInfo = ({ maker, brand, barcode }: ProductCardMetaInfoProps) => {
    return (
        <div className={styles.metaInfo}>
            <MetaInfo title={"Производитель"} value={maker} />
            <MetaInfo title={"Бренд"} value={brand} />
            <MetaInfo title={"Штрихкод"} value={barcode.toString()} />
        </div>
    )
}
