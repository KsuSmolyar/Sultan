import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import { persistor, store } from "./store/store";
import { Provider } from "react-redux";
import { CatalogPage } from "./pages/catalogPage/catalogPage";
import { CartPage } from "./pages/cartPage/cartPage";
import { ProductPage } from "./pages/productPage/productPage";
import { paths } from "./paths";
import { PersistGate } from "redux-persist/integration/react";
import { AdminPage } from "./pages/adminPage/adminPage";
import { MainPage } from "./pages/mainPage/mainPage";

const router = createBrowserRouter([
	{
		path: "/",
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
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<RouterProvider router={router} />
		</PersistGate>
	</Provider>
);
