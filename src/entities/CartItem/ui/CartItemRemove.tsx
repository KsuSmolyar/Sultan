import { useAppDispatch } from "../../../shared/hooks/hooks";
import { ButtonOrLink } from "../../../shared/ui/ButtonOrLink";
import { TrashCan } from "../../../shared/ui/Icons";
import { removeCartProduct } from "../../../store/slices/cartSlice";
import styles from "../cartItem.module.css";

type CartItemRemoveProps = {
    barcode: number
}
export const CartItemRemove = ({ barcode }: CartItemRemoveProps) => {
    const dispatch = useAppDispatch();

    const onRemoveCartProduct = () => {
        dispatch(removeCartProduct(barcode));
    };

    return (
        <ButtonOrLink
            className={styles.deleteButton}
            variant='primary'
            round
            onClick={onRemoveCartProduct}
        >
            <TrashCan />
        </ButtonOrLink>
    )
}
