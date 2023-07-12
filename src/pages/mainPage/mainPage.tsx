import { Link } from 'react-router-dom';
import { paths } from '../../router';
import styles from './mainPage.module.css';
import { Hero } from '../../components/hero/hero';

export const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <Hero />
      <Link className={styles.link} to={paths.admin}>
        Перейти в админку
      </Link>
    </div>
  );
};
