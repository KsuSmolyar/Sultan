import classNames from "classnames";
import styles from "../sidebar.module.css";
import { SidebarSearch } from "./SidebarSearch";
import { SidebarSortByMakers } from "./SidebarSortByMakers";
import { useCallback, useEffect, useState } from "react";
import { addMakerFilter, addPriceFilter, selectMakers } from "../../../store/slices/catalogSlice";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/hooks";
import { ButtonOrLink } from "../../../shared/ui/ButtonOrLink";
import { TrashCan } from "../../../shared/ui/Icons";

type SidebarFormProps = {
    expand: boolean
}
export const SidebarForm = ({expand}: SidebarFormProps) => {
    const [search, setSearch] = useState("");
    const makers = useAppSelector(selectMakers);
    const dispatch = useAppDispatch();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const elements = event.currentTarget.elements;
            const namesMakers = Object.keys(makers);
            const minValue = elements.namedItem("minValue");
            const maxValue = elements.namedItem("maxValue");
    
            const makerInputEl = elements.namedItem("makerInput");
    
            const checkedMakers = namesMakers.filter((maker) => {
                const element = elements.namedItem(maker);
    
                if (makerInputEl instanceof HTMLInputElement && makerInputEl.value.toLowerCase() === maker.toLowerCase()) {
                    return true
                }
                if (element instanceof HTMLInputElement && element.checked) {
                    return true;
                }
                return false;
            }).map((maker) => maker.toLowerCase());
    
            if (
                minValue instanceof HTMLInputElement &&
                minValue.value &&
                maxValue instanceof HTMLInputElement &&
                maxValue.value
            ) {
                dispatch(addPriceFilter([+minValue.value, +maxValue.value]));
            }
    
            dispatch(addMakerFilter(checkedMakers));
    };

    const onRemove = useCallback(() => {
        dispatch(addMakerFilter([]));
        dispatch(addPriceFilter(null));
        setSearch("");
    }, [dispatch]);

     useEffect(() => {
            onRemove();
     }, [onRemove]);

    return (
        <form
            className={classNames(styles.filterContainer, {
                [styles.show]: expand,
            })}
            onSubmit={onSubmit}
        >
            <div className={styles.sortByPrice}>
                <p className={styles.priceTitle}>
                    Цена <span>₸</span>
                </p>
                <div className={styles.priceFilter}>
                    <input
                        className={styles.priceInput}
                        type='number'
                        placeholder='0'
                        name='minValue'
                    />
                    <p className={styles.dash}>-</p>
                    <input
                        className={styles.priceInput}
                        type='number'
                        placeholder='10 000'
                        name='maxValue'
                    />
                </div>
            </div>

            <div className={styles.sortByMaker}>
                <p className={styles.sortByMakerTitle}>Производитель</p>
                <SidebarSearch search={search} setSearch={setSearch} />
                <SidebarSortByMakers />
            </div>

            <div className={styles.buttonsContainer}>
                <ButtonOrLink
                    type='submit'
                    className={styles.showButton}
                    variant='primary'
                >
                    Показать
                </ButtonOrLink>
                <ButtonOrLink
                    className={styles.deleteButton}
                    variant='primary'
                    round
                    onClick={onRemove}
                    type='reset'
                >
                    <TrashCan />
                </ButtonOrLink>
            </div>
        </form>
    )
}
