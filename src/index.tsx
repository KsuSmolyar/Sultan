import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { Catalog } from "./pages/catalog/catalog";
import { CartPage } from "./pages/cartPage/cartPage";
import { ProductPage } from "./pages/productPage/productPage";
import { paths } from "./paths";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,

		children: [
			{
				path: paths.catalog,
				element: <Catalog />,

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
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
