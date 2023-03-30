import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface CatalogState {
	products: ProductType[];
}
export type ProductType = {
	urlImg: string;
	name: string;
	sizeType: SizeType;
	size: number;
	barcode: number;
	maker: string;
	brand: string;
	description: string;
	price: number;
	appointment: string[];
};

export type SizeType = "мл" | "гр";

const initialState: CatalogState = {
	products: [],
};

export const catalogSlice = createSlice({
	name: "catalog",
	initialState,
	reducers: {
		init: (state, action: PayloadAction<ProductType[]>) => {
			state.products = action.payload;
		},
	},
});

export const { init } = catalogSlice.actions;
export const selectProducts = (state: RootState) => state.catalog.products;
export const selectIsEmpty = (state: RootState) =>
	state.catalog.products?.length === 0;

export default catalogSlice.reducer;
