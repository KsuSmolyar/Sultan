import { SubTitle } from '../ui/subTitle/subTitle';
import styles from './categorysection.module.css';
import data from '../../fileData/categoryData.json';
import { CategoryCard } from './categoryCard/categoryCard';

export const CategorySection = () => {
  const categories = data;
  return (
    <section className={styles.categorySection}>
      <SubTitle
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
