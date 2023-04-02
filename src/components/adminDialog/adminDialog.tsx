import classNames from "classnames";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addProductId, selectProductId } from "../../store/slices/adminSlice";
import {
	addProduct,
	ProductType,
	selectProduct,
} from "../../store/slices/catalogSlice";
import { ButtonOrLink } from "../ui/button/button";
import { CrossOrange } from "../ui/icons";
import { Modal } from "../ui/modal/modal";
import styles from "./adminDialog.module.css";

export const AdminDialog: React.FC<{ onClose: () => void }> = ({ onClose }) => {
	const [dragOver, setDragOver] = useState(false);
	const selectedId = useAppSelector(selectProductId);
	const selectedProduct = useAppSelector(selectProduct(selectedId ?? 0));
	const [file, setFile] = useState<string | null>(selectedProduct?.urlImg);

	const dispatch = useAppDispatch();

	const fileProcess = (file: File) => {
		const fileReader = new FileReader();
		fileReader.onload = (event) => {
			if (typeof event.target?.result === "string") {
				setFile(event.target?.result);
			}
		};
		fileReader.readAsDataURL(file);
	};

	const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const file = event.target.files[0];
			fileProcess(file);
		}
	};

	const onDrop = useCallback((event: React.DragEvent<HTMLLabelElement>) => {
		event.preventDefault();
		setDragOver(false);
		if (event.dataTransfer.files) {
			const file = event.dataTransfer.files[0];
			fileProcess(file);
		}
	}, []);

	const onDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
		event.preventDefault();
		setDragOver(true);
	};

	const onDragLeave = (event: React.DragEvent<HTMLLabelElement>) => {
		event.preventDefault();
		setDragOver(false);
	};

	const onRemoveImage = () => {
		setFile(null);
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const product: Record<string, string | number | string[]> = {};
		const elements = event.currentTarget.elements;
		const names = [
			"name",
			"sizeType",
			"size",
			"barcode",
			"maker",
			"brand",
			"description",
			"price",
			"appointment",
		];

		names.forEach((name) => {
			const element = elements.namedItem(name);
			if (
				element instanceof HTMLInputElement ||
				element instanceof HTMLTextAreaElement
			) {
				product[name] =
					name === "size" || name === "barcode" || name === "price"
						? parseInt(element.value)
						: element.value;
			}
			if (element instanceof HTMLSelectElement) {
				if (element.multiple) {
					const values = Array.from(element.options)
						.filter((option) => option.selected)
						.map((option) => option.text);
					product[name] = values;
				} else {
					product[name] = element.value;
				}
			}
		});
		product["urlImg"] = file ?? "";
		dispatch(addProduct(product as ProductType));
		onClose();
	};

	useEffect(() => {
		return () => {
			dispatch(addProductId(null));
		};
	}, [dispatch]);

	return (
		<Modal className={styles.modal}>
			<div className={styles.dialogContainer}>
				<div className={styles.dialogHeader}>
					<h2 className={styles.title}>Редактирование/Добавление товара</h2>
					<button className={styles.closeButton} onClick={onClose}>
						<CrossOrange />
					</button>
				</div>
				<form className={styles.form} action='' onSubmit={onSubmit}>
					<div className={styles.containerUpper}>
						<div className={styles.infoFields}>
							<label>
								<input
									required
									className={styles.inputName}
									defaultValue={selectedProduct?.name}
									name='name'
									type='text'
									placeholder='Название'
								/>
							</label>
							<div className={styles.sizeContainer}>
								<label>
									<input
										className={styles.sizeInput}
										defaultValue={selectedProduct?.size}
										name='size'
										type='number'
										placeholder='размер'
									/>
								</label>

								<select
									className={styles.select}
									name='sizeType'
									id='sizeType'
									defaultValue={selectedProduct?.sizeType}
								>
									<option value='мл'>мл</option>
									<option value='гр'>гр</option>
								</select>
								<label>
									<input
										className={styles.priceInput}
										defaultValue={selectedProduct?.price}
										name='price'
										type='number'
										placeholder='цена'
									/>
								</label>
							</div>
							<label>
								<input
									className={styles.barcodeInput}
									defaultValue={selectedProduct?.barcode}
									name='barcode'
									type='number'
									placeholder='штрихкод'
								/>
							</label>

							<div className={styles.brandContainer}>
								<label>
									<input
										className={styles.makerInput}
										defaultValue={selectedProduct?.maker}
										name='maker'
										type='text'
										placeholder='Производитель'
									/>
								</label>

								<label>
									<input
										className={styles.brandInput}
										defaultValue={selectedProduct?.brand}
										name='brand'
										type='text'
										placeholder='Бренд'
									/>
								</label>
								<select
									className={styles.appointment}
									defaultValue={selectedProduct?.appointment}
									name='appointment'
									id='appointment'
									multiple
								>
									<option value='bodyCare'>Уход за телом</option>
									<option value='footCare'>Уход за ногами</option>
									<option value='handCare'>Уход за руками</option>
									<option value='facialCare'>Уход за лицом</option>
									<option value='hairCare'>Уход за волосами</option>
									<option value='taning'>Средства для загара</option>
									<option value='shaving'>Средства для бритья</option>
									<option value='giftSets'>Подарочные наборы</option>
									<option value='hygienicProducts'>
										Гигиеническая продукция
									</option>
									<option value='oralHygiene'>Гигиена полости рта</option>
									<option value='paperProducts'>Бумажная продукция</option>
								</select>
							</div>
						</div>
						<div className={styles.imgField}>
							{!file ? (
								<label
									className={classNames(styles.labelImg, {
										[styles.dragOver]: dragOver,
									})}
									onDrop={onDrop}
									onDragOver={onDragOver}
									onDragLeave={onDragLeave}
								>
									<span className={styles.labelText}>
										Кликните или перетащите изображение
									</span>
									<input
										name='urlImg'
										type='file'
										accept='image/png, image/jpg'
										onChange={onFileUpload}
										hidden
									/>
								</label>
							) : (
								<div className={styles.imageContainer}>
									<button className={styles.btn} onClick={onRemoveImage}>
										<CrossOrange />
									</button>
									<img
										className={styles.productImg}
										src={file}
										alt='изображение товара'
									/>
								</div>
							)}
						</div>
					</div>
					<div className={styles.containerLower}>
						<label>
							<textarea
								className={styles.textarea}
								defaultValue={selectedProduct?.description}
								name='description'
								id='description'
								placeholder='Описание'
							/>
						</label>
					</div>
					<ButtonOrLink
						type='submit'
						className={styles.saveButton}
						variant='secondary'
					>
						Сохранить
					</ButtonOrLink>
				</form>
			</div>
		</Modal>
	);
};
