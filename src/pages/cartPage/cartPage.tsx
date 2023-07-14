import { useCallback, useState } from 'react';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { ButtonBack } from '../../components/buttonBack/buttonBack';
import { CartDialog } from '../../components/cartList/cartDialog/cartDialog';
import { ListCart } from '../../components/cartList/listCart/listCart';
import { ButtonOrLink } from '../../components/ui/button/button';
import { UseMedia } from '../../hooks/useMedia';
import { paths } from '../../router';
import styles from './cartPage.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { clearCart, selectResultSum } from '../../store/slices/cartSlice';

export const CartPage = () => {
  const mobile = UseMedia('(max-width: 521px)');
  const [show, setShow] = useState(false);
  const resultSum = useAppSelector(selectResultSum);
  const dispatch = useAppDispatch();

  const toggleShow = useCallback(() => {
    setShow((prev) => !prev);
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {mobile ? (
        <ButtonBack className={styles.cartButtonBack} />
      ) : (
        <Breadcrumbs
          className={styles.breadcrumbs}
          crumbs={[{ title: 'Корзина', link: paths.cart }]}
        />
      )}
      <h2 className={styles.cartPageHeader}>Корзина</h2>
      <ListCart />
      <div className={styles.wrapper}>
        <hr className={styles.hr} />
        <div className={styles.resultContainer}>
          <ButtonOrLink
            className={styles.addButton}
            variant='primary'
            onClick={toggleShow}
          >
            Оформить заказ
          </ButtonOrLink>
          <p className={styles.resultPrice}>{resultSum} ₸</p>
        </div>
      </div>
      {show && <CartDialog onClose={toggleShow} />}
    </div>
  );
};
