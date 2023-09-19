import React from "react";
import styles from './aboutpage.module.css';

export const AboutPage = () => {
  return (
    <div className={styles.aboutPageContainer}>
      <h2 className={styles.aboutTitle}>О компании</h2>
      <div className={styles.aboutText}>
        <p className={styles.paragraph}>
        Интернет Магазин <b>«Султан»</b> осуществляет продажу на ул. Ж.Ташенова и доставку в г.Кокчетав популярных товаров бытовой химии, парфюмерии и косметики известных мировых брендов по низким ценам. 
        Мы продаем самое лучшее по хорошей цене. 
        </p>

       <p className={styles.listTitle}>Интернет Магазин <b>«Султан»</b> это:</p> 

      <ul className={styles.aboutList}>
        <li className={styles.aboutListItem}>
        специализированный магазин низких цен, самые лучшие и популярные в г.Кокчетав (бытовая химия для дома),
        </li>
        <li className={styles.aboutListItem}>
        бесплатный пункт самовывоза; минимальные цены;
        </li>
        <li className={styles.aboutListItem}>
        доставка (трех часовой интервал); 
        </li>
        <li className={styles.aboutListItem}>
        индивидуально упакованные товары;
        </li>
        <li className={styles.aboutListItem}>
        оригинальная продукция;
        </li>
        <li className={styles.aboutListItem}>
        гарантия на проданные товары;
        </li>
        <li className={styles.aboutListItem}>
        современные условия хранения;
        </li>
        <li className={styles.aboutListItem}>
        ежедневно с <b>9.00</b> до <b>20.00</b> консультации и прием заказов; 
        </li>
        <li className={styles.aboutListItem}>
        круглосуточный режим работы на сайте при самостоятельном оформлении; 
        </li>
        <li className={styles.aboutListItem}>
        подарки и скидки. 
        </li>
        
      </ul>
      </div>
      
    </div>
  )
}
