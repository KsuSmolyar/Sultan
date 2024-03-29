import styles from './deliverypage.module.css';

export const DeliveryPage = () => {
  return (
    <div className={styles.deliveryPageContainer}>
      <h2 className={styles.title}>
      Заказ в Интернет Магазине «Султан»,<br/> оплата и доставка продукции
      </h2>
      <p className={styles.paragraph}>
        На сайте вы можете оформить заказ круглосуточно.
        Оплата производится на сайте через оналйн платежный сервис "Сбер" Банк и систему быстрых платежей "Райффазен" Банк.
        Доставка осуществляется в любой 3-х часовой интервал с понедельника по субботу с 10.00 до 21.00.
        На сайте есть подробное описание процессов заказа, оплаты, доставки и самовывоза.
        Если у вас останутся вопросы после ознакомления с товарами и услугами, позвоните нам или напишите сообщение.
        Ниже представлена общая краткая информация по услугам.
      </p>

      <div className={styles.deliveryBlock}>
        <h3 className={styles.listTitle}>Заказ на сайте</h3>
        <ul className={styles.list}>
          <li>
            Зайдите в каталог, выберете товар и добавьте в «корзину»
          </li>
          <li>
            Перейдите в корзину, проверьте заказ и нажмите «оформить заказ».
          </li>
          <li>
            Заполните необходимые поля и нажмите «оформить заказ».
          </li>
          <li>
            На e-mail вам придет письмо отчет о заказе.
          </li>
          <li>
            Наш оператор обработает заказ, отправит вам письмо с подтверждением принятого заказа.
          </li>
          <li>
            В день доставки курьер обязательно позвонит вам и привезет заказ.
          </li>
        </ul>
      </div>

      <div className={styles.deliveryBlock}>
        <h3 className={styles.listTitle}>Самовывоз со склада</h3>
        <ul className={styles.list}>
          <li>
            Зайдите в каталог, выберете товар и добавьте в «корзину»
          </li>
          <li>
            Перейдите в корзину, проверьте заказ и нажмите «оформить заказ».
          </li>
          <li>
            Заполните необходимые поля и не забудьте выбрать «самовывоз».
          </li>
          <li>   
            На e-mail вам придет письмо отчет о заказе.
          </li>
          <li>
            Наш оператор обработает заказ, отправит вам письмо и смс уведомление с параметрами заказа.
          </li>
          <li>
            Заказ можете забрать ежедневно с 12.00 до 20.00, кроме субботы. ( в воскресенье с 15 до 20 часов)
          </li>
        </ul>
      </div>

      <div className={styles.deliveryBlock}>
        <h3 className={styles.listTitle}>Оплата</h3>
        <ul className={styles.list}>
          <li>Оплата безналичным платежом для Юридических лиц от 5000 рублей</li>
          <li>Подробнее об оплате в разделе оплата.</li>
        </ul>
      </div>

      <div className={styles.deliveryBlock}>
        <h3 className={styles.listTitle}>Доставка</h3>
        <ul className={styles.list}>
          <li>
            Доставка осуществляется на следующий день, если вы сделали заказ до 15.00
          </li>
          <li>
            В пятницу после 15.00 заказы принимаются на понедельник.
          </li>
          <li>
            Доставка осуществляется в любом выбранном вами 3-х часовом интервале.
          </li>
          <li>
            Накануне или за час до доставки вам позвонит курьер и сообщит о доставке заказа.
          </li>
        </ul>
      </div>
    </div>
  )
}
