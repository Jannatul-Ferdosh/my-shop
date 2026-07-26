import { create } from 'zustand';
import type Product from './entities/product';

interface QueryStore{
  searchText: number,
  cart: Product[];
  setSearchText: (text: number) => void;
  setCart: (prd: Product) => void;
}

const useQueryStore = create<QueryStore>((set) => ({
  searchText: 0,
  cart: [],
  setSearchText: (searchText: number) => set(() => ({searchText})),
  setCart: (prd: Product) => set((store) => ({cart: [...store.cart,prd]}))
}))

export default useQueryStore;