import styles from "../metainfo.module.css";

type MetaInfoProps = {
    title: string
    value: string
}
export const MetaInfo = ({ title, value }: MetaInfoProps) => {
    return (
        <div className={styles.metaInfoItem}>
            <p className={styles.itemTitle}>{title}:</p>
            <p className={styles.itemValue}>{value}</p>
        </div>
    )
}
