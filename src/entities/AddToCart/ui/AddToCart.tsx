import classNames from "classnames";
import { useAppDispatch } from "../../../shared/hooks/hooks";
import { UseMedia } from "../../../shared/hooks/useMedia";
import { ButtonOrLink } from "../../../shared/ui/ButtonOrLink";
import { CartWhite } from "../../../shared/ui/Icons";
import { addProductToCart } from "../../../store/slices/cartSlice";
import styles from "../addToCart.module.css";

type AddToCartProps = {
    barcode: number
    count: number
    className?: string
}

export const AddToCart = ({ barcode, count, className }: AddToCartProps) => {
    const table = UseMedia('(max-width: 1024px)');
    const dispatch = useAppDispatch();

    const onAddToCart = () => {
        dispatch(addProductToCart({ barcode, count }));
    };

    return (
        <ButtonOrLink
            className={classNames(styles.addToCart, className)}
            variant={table ? 'secondary' : 'primary'}
            onClick={onAddToCart}
        >
            В корзину <CartWhite />
        </ButtonOrLink>
    )
}
