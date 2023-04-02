import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface AdminState {
	selectedProductId: number | null;
}

const initialState: AdminState = {
	selectedProductId: null,
};

export const adminSlice = createSlice({
	name: "admin",
	initialState,
	reducers: {
		addProductId: (state, action: PayloadAction<number | null>) => {
			state.selectedProductId = action.payload;
		},
	},
});

export const { addProductId } = adminSlice.actions;
export const selectProductId = (state: RootState) =>
	state.admin.selectedProductId;
export default adminSlice.reducer;
