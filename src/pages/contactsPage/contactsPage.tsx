import styles from './contactspage.module.css';
import classNames from "classnames";

export const ContactsPage = () => {
  return (
    <div className={styles.contactsPageContainer}>
      <div className={styles.innerContainer}>
      <div className={styles.left}>
          <p className={styles.contactsParagraph}>
            <span className={styles.paragraphTitle}>Адрес</span>
            <span className={styles.paragraphText}>г. Кокчетав, ул. Ж. Ташенова 129Б</span>
          </p>
          
          <p className={styles.contactsParagraph}>
            <span className={styles.paragraphTitle}>Телефон</span>
            <span className={styles.paragraphText}>+7 (777) 777-77-77</span>
          </p>

          <p className={styles.contactsParagraph}>
            <span className={styles.paragraphTitle}>Email</span>
            <span className={classNames(styles.paragraphText, styles.coloredText)}>opt.sultan@mail.ru</span>
          </p>
        
        </div>

        <div className={styles.right}>
          <div className={styles.contactsParagraph}>
            <span className={styles.contactsParagraphSpan}>Вы можете заказать товары на сайте и забрать их бесплатно из наших пунктов самовывоза.</span>
            <span>У нас два пункта самовывоза:</span>
            <ul className={styles.list}>
              <li className={styles.listItem}><span className={styles.coloredText}>ПВЗ «Кокчетавский проспект»</span> (бесплатный самовывоз) </li>
              <li className={styles.listItem}><span className={styles.coloredText}>ПВЗ «1905»</span> (бесплатный самовывоз)</li>
            </ul>
          </div>
          
          <div className={styles.infoParagraph}>
            <p className={styles.mainParagraph}>ООО «Султан 124»</p>
            <p><b>ИНН</b> 9999999999</p>
            <p><b>ОГРН</b> 1111111111111</p>
          </div>
        </div>
      </div>
      <form className={styles.feedbackForm}>
        
      </form>
    </div>
  )
}
