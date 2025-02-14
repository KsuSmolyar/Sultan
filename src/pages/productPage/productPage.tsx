import { useParams } from "react-router-dom";
import { useAppSelector } from "../../shared/hooks/hooks";
import { UseMedia } from "../../shared/hooks/useMedia";
import { paths } from "../../router";
import { selectProduct } from "../../store/slices/catalogSlice";
import styles from "./productPage.module.css";
import { ProductCard } from "../../features/productCard";
import { Breadcrumbs } from "../../shared/ui/Breadcrumbs";
import { ButtonBack } from "../../entities/ButtonBack";

export const ProductPage = () => {
	const mobile = UseMedia("(max-width: 521px)");
	const { productId } = useParams<{ productId: string }>();
	const product = useAppSelector(selectProduct(productId ?? 0));
	if (!product) {
		return null;
	}
	return (
		<div className={styles.wrapper}>
			{mobile ? (
				<ButtonBack className={styles.buttonBack} />
			) : (
				<Breadcrumbs
					crumbs={[
						{ title: "Каталог", link: paths.catalog.replace(":page", "1") },
						{
							title: product.name,
							link: paths.product.replace(
								":productId",
								product.barcode.toString()
							),
						},
					]}
				/>
			)}
			<ProductCard product={product} />
		</div>
	);
};
