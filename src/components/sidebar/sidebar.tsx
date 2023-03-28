import classNames from "classnames";
import React, { useState } from "react";
import { ButtonOrLink } from "../ui/button/button";
import { ArrowDownDark, Polygon5, TrashCan } from "../ui/icons";
import { InputSearch } from "../ui/inputSearch/inputSearch";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
	const [expand, setExpand] = useState(false);
	const onClick = () => {
		setExpand((prev) => !prev);
	};

	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebarTitle}>
				<h3 className={styles.titleText}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
				<ButtonOrLink
					className={styles.sidebarButton}
					variant='small'
					round
					onClick={onClick}
				>
					<ArrowDownDark
						className={classNames({ [styles.sidebarButtonImg]: expand })}
					/>
				</ButtonOrLink>
			</div>
			<div
				className={classNames(styles.filterContainer, {
					[styles.show]: expand,
				})}
			>
				<div className={styles.sortByPrice}>
					<p className={styles.priceTitle}>
						Цена <span>₸</span>
					</p>
					<div className={styles.priceFilter}>
						<input className={styles.priceInput} type='text' placeholder='0' />
						<p className={styles.dash}>-</p>
						<input
							className={styles.priceInput}
							type='text'
							placeholder='10 000'
						/>
					</div>
				</div>

				<div className={styles.sortByMaker}>
					<p className={styles.sortByMakerTitle}>Производитель</p>
					<InputSearch
						classNameLabel={styles.sortByMakerInput}
						placeholder='Поиск...'
					/>
					<div className={styles.sortByMakerCheckbox}>
						<label className={styles.checkbox}>
							<input type='checkbox' />
							<div className={styles.checkboxInfo}>
								<p className={styles.checkboxTitle}>Grifon</p>
								<p className={styles.checkboxCounter}>(56)</p>
							</div>
						</label>

						<label className={styles.checkbox}>
							<input type='checkbox' />
							<div className={styles.checkboxInfo}>
								<p className={styles.checkboxTitle}>Boyscout</p>
								<p className={styles.checkboxCounter}>(66)</p>
							</div>
						</label>

						<label className={styles.checkbox}>
							<input type='checkbox' />
							<div className={styles.checkboxInfo}>
								<p className={styles.checkboxTitle}>Paclan</p>
								<p className={styles.checkboxCounter}>(166)</p>
							</div>
						</label>

						<label className={styles.checkbox}>
							<input type='checkbox' />
							<div className={styles.checkboxInfo}>
								<p className={styles.checkboxTitle}>Булгари Грин</p>
								<p className={styles.checkboxCounter}>(21)</p>
							</div>
						</label>
					</div>

					<button className={styles.sortByMakerButton}>
						Показать все <Polygon5 />
					</button>
				</div>

				<div className={styles.buttonsContainer}>
					<ButtonOrLink className={styles.showButton} variant='primary'>
						Показать
					</ButtonOrLink>
					<ButtonOrLink className={styles.deleteButton} variant='primary' round>
						<TrashCan />
					</ButtonOrLink>
				</div>
			</div>

			<div className={styles.categoriesButtons}>
				<button className={styles.categoryButton}>Уход за телом</button>
				<button className={styles.categoryButton}>Уход за руками</button>
				<button className={styles.categoryButton}>Уход за ногами</button>
				<button className={styles.categoryButton}>Уход за лицом</button>
				<button className={styles.categoryButton}>Уход за волосами</button>
				<button className={styles.categoryButton}>Средства для загара</button>
				<button className={styles.categoryButton}>Средства для бритья</button>
				<button className={styles.categoryButton}>Подарочные наборы</button>
				<button className={styles.categoryButton}>
					Гигиеническая продукция
				</button>
				<button className={styles.categoryButton}>Гигиена полости рта</button>
				<button className={styles.categoryButton}>Бумажная продукция</button>
			</div>
		</div>
	);
};
