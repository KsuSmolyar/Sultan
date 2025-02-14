import classNames from "classnames";
import { addAppointmentFilter, appointmentFiltersCosmetic, selectAppointment } from "../../../store/slices/catalogSlice";
import styles from "../sidebar.module.css";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/hooks";

export const SidebarCategories = () => {
    const dispatch = useAppDispatch();
    const filterAppointment = useAppSelector(selectAppointment);
    
    const onAddFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
        const filterIndex = event.currentTarget.dataset.index;
        if (filterIndex) {
            dispatch(addAppointmentFilter(appointmentFiltersCosmetic[+filterIndex]));
        }
    };

    const onResetFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(addAppointmentFilter(null));
    } 

    return (
        <div className={styles.categoriesButtons}>
        {appointmentFiltersCosmetic.map((filter, index) => (
            <button
                className={classNames(styles.categoryButton, {
                    [styles.selected]: filterAppointment === filter,
                })}
                key={index}
                data-index={index}
                onClick={onAddFilter}
            >
                {filter}
            </button>
        ))}
            <button
                className={classNames(styles.categoryButton, {
                    [styles.selected]: filterAppointment === null,
                })}
                onClick={onResetFilter}
            >
                Показать все
            </button>
    </div>
    )
}
