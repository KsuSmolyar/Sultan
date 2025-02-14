import classNames from "classnames";
import { ButtonOrLink } from "../../../shared/ui/ButtonOrLink";
import { ArrowDownDark } from "../../../shared/ui/Icons";
import styles from "../sidebar.module.css";
import { useCallback } from "react";

type SidebarHeaderProps = {
    expand: boolean
    setExpand: React.Dispatch<React.SetStateAction<boolean>>
}
export const SidebarHeader = ({ expand, setExpand }: SidebarHeaderProps) => {
    
     const onExpandClick = useCallback(() => {
            setExpand((prev) => !prev);
     }, [setExpand]);
    
    return (
        <header className={styles.sidebarHeader}>
        <h3 className={styles.titleText}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
        <ButtonOrLink
            className={styles.sidebarButton}
            variant='small'
            round
            onClick={onExpandClick}
        >
            <ArrowDownDark
                className={classNames({ [styles.sidebarButtonImg]: expand })}
            />
        </ButtonOrLink>
    </header>
    )
}
