import { create } from 'zustand';

interface QueryStore{
  searchText: number,
  isLoggedIn: boolean;
  category: string;
  setCategory: (category: string) => void;
  setLoggedIn: () => void;
  setSearchText: (text: number) => void;
}

const useQueryStore = create<QueryStore>((set) => ({
  searchText: 0,
  category: "",
  setCategory: (category: string) => set(() => ({category})),
  isLoggedIn: localStorage.getItem("token")? true : false,
  setSearchText: (searchText: number) => set(() => ({searchText})),
  setLoggedIn: () => set(() => ({isLoggedIn: localStorage.getItem("token")? true : false}))
}))

export default useQueryStore;