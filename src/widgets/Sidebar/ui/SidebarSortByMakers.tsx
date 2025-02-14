import classNames from "classnames";
import { Dropdown } from "../../../shared/ui/Dropdown";
import styles from "../sidebar.module.css";
import { useAppSelector } from "../../../shared/hooks/hooks";
import { selectMakers } from "../../../store/slices/catalogSlice";

export const SidebarSortByMakers = () => {
    const makers = useAppSelector(selectMakers);
    
    return (
        <div className={styles.sortByMakerCheckbox}>
        <div className={styles.sortByMakerCheckbox}>
            {Object.keys(makers)
                .slice(0, 4)
                .map((maker, index) => (
                    <label className={styles.checkbox} key={index}>
                        <input type='checkbox' name={maker} />
                        <div className={styles.checkboxInfo}>
                            <p className={styles.checkboxTitle}>{maker}</p>
                            <p className={styles.checkboxCounter}>
                                ({makers[maker]})
                            </p>
                        </div>
                    </label>
                ))}
        </div>
        <Dropdown
            dataTestid='sortButton'
            className={styles.sortByMakerButton}
            classNameContainer={classNames(
                styles.dropDownContainer,
                styles.sortByMakerCheckbox
            )}
            buttonText='Показать все'
        >
            <div
                data-testid='sortList'
                className={styles.sortByMakerCheckbox}
            >
                {Object.keys(makers)
                    .slice(4)
                    .map((maker) => (
                        <label className={styles.checkbox} key={maker}>
                            <input type='checkbox' name={maker} />
                            <div className={styles.checkboxInfo}>
                                <p className={styles.checkboxTitle}>{maker}</p>
                                <p className={styles.checkboxCounter}>
                                    ({makers[maker]})
                                </p>
                            </div>
                        </label>
                    ))}
            </div>
        </Dropdown>
    </div>
    )
}
