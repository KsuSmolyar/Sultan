import { useCallback, useState } from 'react';
import { UseMedia } from '../../shared/hooks/useMedia';
import { paths } from '../../router';
import styles from './cartPage.module.css';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/hooks';
import { clearCart, selectCardProductsCount, selectResultSum } from '../../store/slices/cartSlice';
import classNames from 'classnames';
import { ButtonOrLink } from '../../shared/ui/ButtonOrLink';
import { Breadcrumbs } from '../../shared/ui/Breadcrumbs';
import { ButtonBack } from '../../entities/ButtonBack';
import { CartList } from '../../widgets/CartList';
import { CartDialog } from '../../entities/CartDialog';

export const CartPage = () => {
  const mobile = UseMedia('(max-width: 521px)');
  const [show, setShow] = useState(false);
  const resultSum = useAppSelector(selectResultSum);
  const cartProductCount = useAppSelector(selectCardProductsCount);
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
      <CartList />
      <div className={styles.wrapper}>
        <hr className={styles.hr} />
        <div className={styles.resultContainer}>
          <ButtonOrLink
            className={classNames(styles.addButton, {
              [styles.disabledButton]: cartProductCount === 0
            })}
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
