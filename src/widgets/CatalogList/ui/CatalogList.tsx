import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../shared/hooks/hooks";
import { paths } from "../../../router";
import {
    selectAppointment,
    selectMaker,
    selectPrice,
    selectProducts,
    selectSort,
} from "../../../store/slices/catalogSlice";
import styles from "../catalogList.module.css";
import { CatalogCard } from "../../../entities/CatalogCard";
import { Pagination } from "../../../shared/ui/Pagination";
import { DEFAULT_CARDS_ON_PAGE } from "../config/constants";

export const CatalogList = () => {
    const products = useAppSelector(selectProducts);
    const appointmentFilter = useAppSelector(selectAppointment);
    const priceFilter = useAppSelector(selectPrice);
    const makerFilter = useAppSelector(selectMaker);
    const sort = useAppSelector(selectSort);

    const { page } = useParams<{ page: string }>();

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            if (
                appointmentFilter &&
                !product.appointment.includes(appointmentFilter)
            ) {
                return false;
            }
            if (
                priceFilter &&
                (priceFilter[0] > product.price || priceFilter[1] < product.price)
            ) {
                return false;
            }
            if (makerFilter.length && !makerFilter.includes(product.maker.toLowerCase())) {
                return false;
            }
            return true;
        });
    }, [appointmentFilter, priceFilter, makerFilter, products]);

    const sortedProducts = useMemo(() => {
        return filteredProducts.sort((a, b) => {
            if (sort) {
                const { direction, type } = sort;
                const productA = direction === "asc" ? a : b;
                const productB = direction === "asc" ? b : a;

                if (type === "name") {
                    return productA.name.localeCompare(productB.name);
                }
                if (type === "price") {
                    return productA.price - productB.price;
                }
            }
            return 0;
        });
    }, [sort, filteredProducts]);

    const maxIndexCard = DEFAULT_CARDS_ON_PAGE * +(page ?? 1);
    const minIndexCard = maxIndexCard - DEFAULT_CARDS_ON_PAGE;
    const displayedCards = sortedProducts.slice(minIndexCard, maxIndexCard);
    const pages = Array.from(
        { length: Math.ceil(sortedProducts.length / DEFAULT_CARDS_ON_PAGE) },
        (v, k) => paths.catalog.replace(":page", `${k + 1}`)
    );

    return (
        <div className={styles.productWrapper}>
            <div className={styles.productCardsContainer}>
                {!!displayedCards.length ? <ul className={styles.catalogList}>
                    {displayedCards.map((product) => (
                        <CatalogCard
                            key={product.barcode}
                            productImg={product.urlImg}
                            productName={product.name}
                            productSizeType={product.sizeType}
                            productSize={product.size}
                            productBarcode={product.barcode}
                            productMaker={product.maker}
                            productBrand={product.brand}
                            productPrice={product.price}
                        />
                    ))}
                </ul> : <div className={styles.empty}>По вашему запросу ничего не найдено</div>}
            </div>
            <Pagination pages={pages} />
        </div>
    );
};
