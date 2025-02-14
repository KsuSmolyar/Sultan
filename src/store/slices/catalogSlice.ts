import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type SortType = {
  title: string;
  type: 'name' | 'price';
  direction: 'asc' | 'desc';
};

interface CatalogState {
  products: Record<string, ProductType>;
  makers: Record<string, number>;
  filterByAppointment: string | null;
  filterByPrice: number[] | null;
  filterByMaker: string[];
  sort: SortType | null;
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
  products: {},
  makers: {},
  filterByAppointment: null,
  filterByPrice: null,
  filterByMaker: [],
  sort: null,
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload.reduce(
        (acc: Record<number, ProductType>, val) => {
          acc[val.barcode] = val;
          return acc;
        },
        {}
      );
    },
    initMakers: (state) => {
      state.makers = Object.values(state.products).reduce(
        (acc: Record<string, number>, val) => {
          const makerCount = acc[val.maker] ? acc[val.maker] + 1 : 1;
          acc[val.maker] = makerCount;
          return acc;
        },
        {}
      );
    },
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.products[action.payload.barcode] = action.payload;
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      delete state.products[action.payload];
    },
    addAppointmentFilter: (state, action: PayloadAction<string | null>) => {
      state.filterByAppointment = action.payload;
    },
    addPriceFilter: (state, action: PayloadAction<number[] | null>) => {
      state.filterByPrice = action.payload;
    },
    addMakerFilter: (state, action: PayloadAction<string[]>) => {
      state.filterByMaker = action.payload;
    },
    addSort: (state, action: PayloadAction<SortType | null>) => {
      state.sort = action.payload;
    },
  },
});

export const {
  init,
  initMakers,
  addProduct,
  deleteProduct,
  addAppointmentFilter,
  addPriceFilter,
  addMakerFilter,
  addSort,
} = catalogSlice.actions;
export const selectProducts = (state: RootState) =>
  Object.values(state.catalog.products);
export const selectIsEmpty = (state: RootState) =>
  Object.keys(state.catalog.products).length === 0;
export const selectProduct = (barcode: string | number) => (state: RootState) =>
  state.catalog.products[barcode];

export const selectAppointment = (state: RootState) =>
  state.catalog.filterByAppointment;

export const selectPrice = (state: RootState) => state.catalog.filterByPrice;

export const selectMaker = (state: RootState) => state.catalog.filterByMaker;

export const selectMakers = (state: RootState) => state.catalog.makers;

export const selectSort = (state: RootState) => state.catalog.sort;
export default catalogSlice.reducer;

export const appointmentFiltersCosmetic = [
  "Уход за телом",
  "Уход за ногами",
  "Уход за руками",
  "Уход за лицом",
  "Уход за волосами",
  "Средства для загара",
  "Средства для бритья",
  "Подарочные наборы",
  "Гигиеническая продукция",
  "Гигиена полости рта",
  "Бумажная продукция",
];

export const appointmentFiltersCatalog = [
  "Бытовая химия",
  "Косметика и гигиена",
  "Товары для дома",
  "Товары для детей и мам",
  "Посуда",
];
