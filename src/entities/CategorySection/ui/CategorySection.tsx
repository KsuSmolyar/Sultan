import styles from '../categorysection.module.css';
import data from '../../../fileData/categoryData.json';
import { Subtitle } from '../../../shared/ui/Subtitle';
import { CategoryCard } from '../../../shared/ui/CategoryCard';

export const CategorySection = () => {
    const categories = data;
    return (
        <section className={styles.categorySection}>
            <Subtitle
                coloredText='Категории'
                text='товаров'
                subCaptionText='10 000+ ходовых позиций по спецмальным ценам'
            />

            <ul className={styles.categorySectionList}>
                {categories.map((category, ind) => (
                    <CategoryCard
                        key={ind}
                        name={category.name}
                        urlImg={category.urlImg}
                    />
                ))}
            </ul>
        </section>
    );
};
