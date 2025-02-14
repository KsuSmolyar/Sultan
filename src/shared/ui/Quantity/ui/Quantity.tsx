import { addProductToCart } from "../../../../store/slices/cartSlice";
import { useAppDispatch } from "../../../hooks/hooks";
import styles from "../quantity.module.css";

type QuantityProps = {
    count: number
    setCount?: React.Dispatch<React.SetStateAction<number>>
    barcode?: number
}
export const Quantity = ({ count, setCount, barcode }: QuantityProps) => {
    const dispatch = useAppDispatch();

    const onDecreaseCount = () => {
        if (setCount) {
            setCount((prev) => {
                if (prev > 1) {
                    return prev - 1;
                }
                return prev;
            });
        }

        if (barcode) {
            dispatch(addProductToCart({ barcode, count: -1 }));
        }
    };

    const onIncreaseCount = () => {
        if (setCount) {
            setCount((prev) => prev + 1);
        }

        if (barcode) {
            dispatch(addProductToCart({ barcode, count: 1 }));
        }
    };

    return (
        <div className={styles.quantity}>
            <button
                data-testid='testDecrementButton'
                className={styles.quantityButton}
                onClick={onDecreaseCount}
            >
                -
            </button>
            <p data-testid='testCount'>
                {count}
            </p>
            <button
                data-testid='testIncrementButton'
                className={styles.quantityButton}
                onClick={onIncreaseCount}
            >
                +
            </button>
        </div>
    )
}
