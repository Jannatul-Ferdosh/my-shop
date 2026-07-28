import { create } from 'zustand';
import type Product from './entities/product';

interface QueryStore{
  searchText: number,
  cart: Product[];
  setSearchText: (text: number) => void;
  setCart: (prd: Product) => void;
  removeFromCart: (id: number) => void;
}

const useQueryStore = create<QueryStore>((set) => ({
  searchText: 0,
  cart: [],
  setSearchText: (searchText: number) => set(() => ({searchText})),
  setCart: (prd: Product) => set((store) => ({cart: [...store.cart,prd]})),
  removeFromCart: (id) =>set((store) => ({cart: store.cart.filter((prd) => prd.id !== id)})),
}))

export default useQueryStore;