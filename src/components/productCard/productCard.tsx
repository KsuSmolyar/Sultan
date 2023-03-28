import classNames from "classnames";
import React from "react";
import { UseMedia } from "../../hooks/useMedia";

import { ButtonOrLink } from "../ui/button/button";
import { ArrowPriceDark, Box, CartWhite, Polygon4, Share } from "../ui/icons";
import styles from "./productCard.module.css";

export const ProductCard = () => {
	const table = UseMedia("(max-width: 1024px)");

	return (
		<div className={styles.productCard}>
			<div className={styles.productImage}>
				<img
					src={process.env.PUBLIC_URL + "/BioMioBig.png"}
					alt='мыло BioMio'
				/>
			</div>
			<div className={styles.productDescriptions}>
				<div className={styles.descriptionHeader}>
					<p className={styles.isAvailable}>В наличии</p>
					<p className={styles.descriptionTitle}>
						<b>BioMio BIO-SOAP</b> Экологичное туалетное мыло. Литсея и бергамот
					</p>
					<p className={styles.packageType}>
						<Box /> 90гр
					</p>
				</div>

				<div className={styles.productPrice}>
					<div className={styles.priceContainerFirst}>
						<p className={styles.price}>48,76 ₸</p>
						<div className={styles.quantityСhange}>
							<button
								className={classNames(styles.minus, styles.quantityButton)}
							>
								-
							</button>
							<p className={styles.count}>1</p>
							<button
								className={classNames(styles.plus, styles.quantityButton)}
							>
								+
							</button>
						</div>
					</div>
					<div className={styles.priceContainerSecond}>
						<ButtonOrLink
							className={styles.priceButton}
							variant={table ? "secondary" : "primary"}
						>
							В корзину <CartWhite />
						</ButtonOrLink>
						<div
							className={classNames(styles.shareIcon, styles.shareIconUpper)}
						>
							<Share />
						</div>
					</div>
				</div>

				<div className={styles.priceInfo}>
					<div className={styles.shareIcon}>
						<Share />
					</div>

					<div className={styles.priceContainerThird}>
						<p className={styles.promotion}>
							<p>
								При покупке от <b>10 000 ₸</b> бесплатная
								<br />
								доставка по Кокчетаву и области
							</p>
						</p>
						<button className={styles.buttonPriceList}>
							Прайс-лист <ArrowPriceDark />
						</button>
					</div>
				</div>

				<div className={styles.metaInfo}>
					<div className={styles.metaInfoItem}>
						<p className={styles.itemTitle}>Производитель:</p>
						<p className={styles.itemValue}>BioMio</p>
					</div>
					<div className={styles.metaInfoItem}>
						<p className={styles.itemTitle}>Бренд:</p>
						<p className={styles.itemValue}>BioMio</p>
					</div>
					<div className={styles.metaInfoItem}>
						<p className={styles.itemTitle}>Артикул:</p>
						<p className={styles.itemValue}>460404</p>
					</div>
					<div className={styles.metaInfoItem}>
						<p className={styles.itemTitle}>Штрихкод:</p>
						<p className={styles.itemValue}>4604049097548</p>
					</div>
				</div>

				<div className={styles.discribingContainer}>
					<button className={styles.discribingButton}>
						Описание <Polygon4 />
					</button>
					<p className={styles.descriptText}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
						interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis
						vulputate feugiat massa vestibulum duis. Faucibus consectetur
						aliquet sed pellentesque consequat consectetur congue mauris
						venenatis. Nunc elit, dignissim sed nulla ullamcorper enim,
						malesuada.
					</p>
				</div>

				<hr className={styles.hr} />

				<div className={styles.discribingContainer}>
					<button className={styles.discribingButton}>
						Характеристики <Polygon4 />
					</button>
					<div className={styles.metaInfo}>
						<div className={styles.metaInfoItem}>
							<p className={styles.itemTitle}>Назначение:</p>
							<p className={styles.itemValue}>BioMio</p>
						</div>
						<div className={styles.metaInfoItem}>
							<p className={styles.itemTitle}>Тип:</p>
							<p className={styles.itemValue}>BioMio</p>
						</div>
						<div className={styles.metaInfoItem}>
							<p className={styles.itemTitle}>Производитель:</p>
							<p className={styles.itemValue}>460404</p>
						</div>
						<div className={styles.metaInfoItem}>
							<p className={styles.itemTitle}>Бренд:</p>
							<p className={styles.itemValue}>4604049097548</p>
						</div>

						<div className={styles.metaInfoItem}>
							<p className={styles.itemTitle}>Артикул:</p>
							<p className={styles.itemValue}>BioMio</p>
						</div>
						<div className={styles.metaInfoItem}>
							<p className={styles.itemTitle}>Штрихкод::</p>
							<p className={styles.itemValue}>4604049097548</p>
						</div>
						<div className={styles.metaInfoItem}>
							<p className={styles.itemTitle}>Вес:</p>
							<p className={styles.itemValue}>90 г</p>
						</div>
						<div className={styles.metaInfoItem}>
							<p className={styles.itemTitle}>Объем:</p>
							<p className={styles.itemValue}>90 г</p>
						</div>
						<div className={styles.metaInfoItem}>
							<p className={styles.itemTitle}>Кол-во в коробке:</p>
							<p className={styles.itemValue}>90 г</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
