import { store } from "../redux/store";

export type AppState = ReturnType<typeof store.getState>;

export type Product = {
  id: number;
  name: string;
  price: number;
};

export type InitialState = {
  products: Product[];
  favList: Product[];
};

export type InitialStateAuth = {
  isAuthenticated: boolean;
};
