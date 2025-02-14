import classNames from "classnames";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/hooks";
import {
    addAppointmentFilter,
    addMakerFilter,
    addPriceFilter,
    appointmentFiltersCosmetic,
    selectAppointment,
    selectMakers,
} from "../../../store/slices/catalogSlice";
import styles from "../sidebar.module.css";
import { ButtonOrLink } from "../../../shared/ui/ButtonOrLink";
import { Dropdown } from "../../../shared/ui/Dropdown";
import { InputSearch } from "../../../entities/InputSearch";
import { ArrowDownDark, TrashCan } from "../../../shared/ui/Icons";

export const Sidebar = () => {
    const [expand, setExpand] = useState(false);
    const [search, setSearch] = useState("");
    const filterAppointment = useAppSelector(selectAppointment);
    const makers = useAppSelector(selectMakers);

    const dispatch = useAppDispatch();

    const onAddFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
        const filterIndex = event.currentTarget.dataset.index;
        if (filterIndex) {
            dispatch(addAppointmentFilter(appointmentFiltersCosmetic[+filterIndex]));
        }
    };

    const onClick = useCallback(() => {
        setExpand((prev) => !prev);
    }, []);

    const onFilter = useCallback(() => {
        dispatch(addMakerFilter([search.toLowerCase()]));
    }, [dispatch, search]);

    const onCheck = (event: React.MouseEvent<HTMLParagraphElement>) => {
        const text = event.currentTarget.dataset["maker"];
        if (text) {
            setSearch(text);
        }
    };

    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value.toLowerCase());
    };

    const searchedMakers = useMemo(() => {
        return Object.keys(makers).filter(
            (maker) => search && maker.toLowerCase().startsWith(search)
        );
    }, [search, makers]);

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
        <div className={styles.sidebar}>
            <div className={styles.sidebarTitle}>
                <h3 className={styles.titleText}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
                <ButtonOrLink
                    className={styles.sidebarButton}
                    variant='small'
                    round
                    onClick={onClick}
                >
                    <ArrowDownDark
                        className={classNames({ [styles.sidebarButtonImg]: expand })}
                    />
                </ButtonOrLink>
            </div>

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
            </div>
        </div>
    );
};
