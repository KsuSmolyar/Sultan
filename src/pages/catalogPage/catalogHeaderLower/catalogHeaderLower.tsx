import classNames from 'classnames';
import styles from './catalogheaderlower.module.css';
import { addAppointmentFilter, selectAppointment } from '../../../store/slices/catalogSlice';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/hooks';

export const CatalogHeaderLower: React.FC<CatalogHeaderLowerProps> = ({ arr }) => {
	const dispatch = useAppDispatch();
	const filterAppointment = useAppSelector(selectAppointment);

	const onAddFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
		const filterIndex = event.currentTarget.dataset.index;
		if (filterIndex) {
			dispatch(addAppointmentFilter(arr[+filterIndex]));
		}
	};

	return (
		<div className={styles.catalogHeaderLower}>
			{arr.map((filter, index) => (
				<button
					data-testid={filter}
					className={classNames(styles.sortButton, {
						[styles.selected]: filterAppointment === filter,
					})}
					key={filter}
					data-index={index}
					onClick={onAddFilter}
				>
					{filter}
				</button>
			))}
		</div>
	)
}


type CatalogHeaderLowerProps = {
	arr: string[];
}
