import { useCallback, useMemo } from "react";
import { InputSearch } from "../../../entities/InputSearch";
import styles from "../sidebar.module.css";
import { addMakerFilter, selectMakers } from "../../../store/slices/catalogSlice";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/hooks";

type SidebarSearchProps = {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}
export const SidebarSearch = ({ search, setSearch }: SidebarSearchProps) => {
    const dispatch = useAppDispatch();
    const makers = useAppSelector(selectMakers);
    
    const searchedMakers = useMemo(() => {
        return Object.keys(makers).filter(
            (maker) => search && maker.toLowerCase().startsWith(search)
        );
    }, [search, makers]);
    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(event.target.value.toLowerCase());
    };

     const onFilter = useCallback(() => {
            dispatch(addMakerFilter([search.toLowerCase()]));
     }, [dispatch, search]);
    
    const onCheck = (event: React.MouseEvent<HTMLParagraphElement>) => {
        const text = event.currentTarget.dataset["maker"];
        if (text) {
            setSearch(text);
        }
    };
    
    return (
        <div className={styles.searchWrapper}>
        <InputSearch
            classNameLabel={styles.sortByMakerInput}
            placeholder='Поиск...'
            name='makerInput'
            value={search}
            onChange={onSearch}
            onClick={onFilter}
        />
        {searchedMakers.length > 0 && (
            <div className={styles.searchMakers}>
                {searchedMakers.map((maker, index) => (
                    <p
                        key={index}
                        className={styles.textMaker}
                        data-maker={maker}
                        onClick={onCheck}
                    >
                        {maker}
                    </p>
                ))}
            </div>
        )}
    </div>
    )
}
