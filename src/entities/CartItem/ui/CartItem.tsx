import React from 'react';
import styles from '../cartItem.module.css';
import { useAppSelector } from '../../../shared/hooks/hooks';
import { selectProduct } from '../../../store/slices/catalogSlice';
import { Quantity } from '../../../shared/ui/Quantity';
import { CartItemText } from './CartItemText';
import { CartItemRemove } from './CartItemRemove';
import { CartItemImage } from './CartItemImage';

export const CartItem: React.FC<{ barcode: string; countProduct: number }> = ({
    barcode,
    countProduct,
}) => {
    const product = useAppSelector(selectProduct(barcode));

    return (
        <div className={styles.container}>
            <hr className={styles.hr} />
            <div className={styles.cartItemContainer}>
                <CartItemImage urlImg={product.urlImg} />
                <div className={styles.cartItemInfo}>

                    <CartItemText
                        brand={product.brand}
                        name={product.name}
                        description={product.description}
                        size={product.size}
                        sizeType={product.sizeType}
                    />

                    <div className={styles.priceContainer}>
                        <p className={styles.price}>{product.price * countProduct} ₸</p>
                        <Quantity count={countProduct} barcode={product.barcode} />
                        <CartItemRemove barcode={product.barcode} />
                    </div>
                </div>
            </div>
        </div>
    );
};
