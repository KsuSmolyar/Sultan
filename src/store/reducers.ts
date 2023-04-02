import { combineReducers } from "@reduxjs/toolkit";
import catalogSlice from "./slices/catalogSlice";
import adminSlice from "./slices/adminSlice";
import cartSlice from "./slices/cartSlise";

export const rootReducer = combineReducers({
	catalog: catalogSlice,
	admin: adminSlice,
	cart: cartSlice,
});
