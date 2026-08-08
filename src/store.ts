import { create } from 'zustand';

interface QueryStore{
  query:{
    sort?: string;
    sortby?: string;
  }
  searchText: number,
  isLoggedIn: boolean;
  category: string;
  sorted: string;
  setSorted: (sorted: string) => void;
  setSort: (sort: string) => void;
  setSorby: (sortby: string)=> void;
  setCategory: (category: string) => void;
  setLoggedIn: () => void;
  setSearchText: (text: number) => void;
}

const useQueryStore = create<QueryStore>((set) => ({
  query:{},
  searchText: 0,
  category: "",
  sorted: "",
  isLoggedIn: localStorage.getItem("token")? true : false,
  setSort: (sort: string) => set(store => ({query: {...store.query,sort}})),
  setSorby: (sortby: string)=> set(store => ({query: {...store.query,sortby}})),
  setCategory: (category: string) => set(() => ({category})),
  setSorted: (sorted: string) => set(() => ({sorted})),
  setSearchText: (searchText: number) => set(() => ({searchText})),
  setLoggedIn: () => set(() => ({isLoggedIn: localStorage.getItem("token")? true : false}))
}))

export default useQueryStore;