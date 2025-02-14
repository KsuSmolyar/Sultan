import { SizeType } from "../../../../store/slices/catalogSlice"
import styles from "../sizeTypeSelect.module.css"

type SizeTypeSelectProps = {
    sizeType: SizeType
}

export const SizeTypeSelect = ({ sizeType }: SizeTypeSelectProps) => {
    return (
        <select
            className={styles.sizeTypeSelect}
            name='sizeType'
            id='sizeType'
            defaultValue={sizeType}
        >
            <option value='мл'>мл</option>
            <option value='гр'>гр</option>
        </select>
    )
}
