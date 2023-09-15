import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../router';
import { SizeType } from '../../../store/slices/catalogSlice';
import { ButtonOrLink } from '../../ui/button/button';
import { Bottle, Box, CartWhite } from '../../ui/icons';
import styles from './catalogCard.module.css';
import { useAppDispatch } from '../../../hooks/hooks';
import { addProductToCart } from '../../../store/slices/cartSlice';
import classNames from 'classnames';

export const CatalogCard: React.FC<CatalogCardProps> = ({
  productImg,
  productName,
  productSizeType,
  productSize,
  productBarcode,
  productMaker,
  productBrand,
  productPrice,
  classPromotion,
}) => {
  const dispatch = useAppDispatch();
  const onAddCart = () => {
    dispatch(addProductToCart({ barcode: productBarcode, count: 1 }));
  };

  const typeSizeIcon = productSizeType === 'мл' ? <Bottle /> : <Box />;

  return (
    <li className={styles.cardContainer}>
      <Link  to={`/${paths.product.replace(
          ':productId',
          productBarcode.toString()
        )}`}>
        <div className={classNames(styles.cardImage, classPromotion)}>
          <img
            className={styles.productImg}
            src={productImg}
            alt='изображение товара'
          />
        </div>

        <div className={styles.packageType}>
          {typeSizeIcon}
          <p>
            {productSize} {productSizeType}
          </p>
        </div>
        <p className={styles.cardTitle}>
          <b>{productBrand}</b> {productName}
        </p>
        <div className={styles.specifications}>
          <div className={styles.specificationsItem}>
            <p className={styles.specificationsTitle}>Штрихкод:</p>
            <p className={styles.specificationsValue}>{productBarcode}</p>
          </div>
          <div className={styles.specificationsItem}>
            <p className={styles.specificationsTitle}>Производитель:</p>
            <p className={styles.specificationsValue}>{productMaker}</p>
          </div>
          <div className={styles.specificationsItem}>
            <p className={styles.specificationsTitle}>Бренд:</p>
            <p className={styles.specificationsValue}>{productBrand}</p>
          </div>
        </div>
      </Link>
      <div className={styles.priceContainer}>
        <p className={styles.priceValue}>{productPrice} ₸</p>
        
        <ButtonOrLink
          className={styles.cartButton}
          variant='secondary'
          onClick={onAddCart}
        >
          В корзину
          <CartWhite />
        </ButtonOrLink>
      </div>
      
    </li>
  );
};

type CatalogCardProps = {
  productImg: string;
  productName: string;
  productSizeType: SizeType;
  productSize: number;
  productBarcode: number;
  productMaker: string;
  productBrand: string;
  productPrice: number;
  classPromotion?: string;
};
