import { RouteObject } from "react-router-dom";
import App from "../App";
import { AdminPage } from "../pages/adminPage/adminPage";
import { CartPage } from "../pages/cartPage/cartPage";
import { CatalogPage } from "../pages/catalogPage/catalogPage";
import { MainPage } from "../pages/mainPage/mainPage";
import { ProductPage } from "../pages/productPage/productPage";
import { paths } from "./paths";

export const routes: RouteObject[] = [
	{
		path: paths.main,
		element: <App />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: paths.catalog,
				element: <CatalogPage />,
			},
			{
				path: paths.cart,
				element: <CartPage />,
			},
			{
				path: paths.product,
				element: <ProductPage />,
			},
		],
	},
	{
		path: paths.admin,
		element: <AdminPage />,
	},
];
