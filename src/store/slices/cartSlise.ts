import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { selectProducts } from "./catalogSlice";

interface CartState {
	cartProducts: Record<number, number>;
}

const initialState: CartState = {
	cartProducts: {},
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProductToCart: (
			state,
			action: PayloadAction<{ barcode: number; count: number }>
		) => {
			const productCount = state.cartProducts[action.payload.barcode];
			if (productCount) {
				const sumProductCount = productCount + action.payload.count;
				if (sumProductCount <= 0) {
					delete state.cartProducts[action.payload.barcode];
				} else {
					state.cartProducts[action.payload.barcode] = sumProductCount;
				}
			} else {
				state.cartProducts[action.payload.barcode] = action.payload.count;
			}
		},
		clearCart: (state) => {
			state.cartProducts = {};
		},
		removeCartProduct: (state, action: PayloadAction<number>) => {
			delete state.cartProducts[action.payload];
		},
	},
});

export const { addProductToCart, clearCart, removeCartProduct } =
	cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.cartProducts;

export const selectCardProductsCount = (state: RootState) =>
	Object.values(state.cart.cartProducts).reduce((acc, val) => acc + val, 0);

export const selectResultSum = createSelector(
	[(state: RootState) => state.catalog.products, selectCart],
	(products, productsCart) => {
		return Object.keys(productsCart).reduce((acc, val) => {
			console.log(products);
			return (acc += products[+val].price * productsCart[+val]);
		}, 0);
	}
);
export default cartSlice.reducer;
