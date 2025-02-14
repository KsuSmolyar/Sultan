import { InputSearch } from "../../../entities/InputSearch";
import { ArrowRight } from "../../../shared/ui/Icons";
import { Logotype } from "../../../shared/ui/Logo";
import { PriceDownload } from "../../../shared/ui/PriceDownload";
import styles from "../footer.module.css";

export const FooterAbout = () => {
    return (
        <div className={styles.footerAbout}>
            <div className={styles.aboutContainer}>
                <Logotype variant={"white"} />
                <PriceDownload variant="primary" />
            </div>
            <p className={styles.footerAboutText}>
                Компания «Султан» — снабжаем розничные магазины товарами "под
                ключ" в Кокчетаве и Акмолинской области
            </p>
            <div className={styles.footerSearch}>
                <p className={styles.footerSearchText}>
                    Подпишись на скидки и акции
                </p>
                <InputSearch
                    classNameLabel={styles.footerInputSearch}
                    placeholder='Введите ваш E-mail'
                >
                    <ArrowRight />
                </InputSearch>
            </div>
    </div>
    )
}
