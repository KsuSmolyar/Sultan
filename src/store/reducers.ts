import { combineReducers } from "@reduxjs/toolkit";
import catalogSlice from "./slices/catalogSlice";

export const rootReducer = combineReducers({
	catalog: catalogSlice,
});
