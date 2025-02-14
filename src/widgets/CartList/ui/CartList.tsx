import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../shared/hooks/hooks';
import { selectCart } from '../../../store/slices/cartSlice';
import styles from '../cartList.module.css';
import { paths } from '../../../router';
import { CartItem } from '../../../entities/CartItem';

export const CartList = () => {
    const cartProduct = useAppSelector(selectCart);
    const cartProductKeys = Object.keys(cartProduct);
    if (cartProductKeys.length === 0) {
        return (
            <div className={styles.emptyCart}>
                <p>
                    Корзина пуста, перейти в{' '}
                    <Link
                        className={styles.link}
                        to={'/' + paths.catalog.replace(':page', '1')}
                    >
                        Каталог
                    </Link>
                </p>
            </div>
        );
    }
    return (
        <ul className={styles.cartList}>
            {cartProductKeys.map((barcode) => (
                <CartItem
                    key={barcode}
                    barcode={barcode}
                    countProduct={cartProduct[+barcode]}
                />
            ))}
        </ul>
    );
};
