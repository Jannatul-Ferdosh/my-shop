import { create } from 'zustand';

interface QueryStore{
  searchText: number,
  isLoggedIn: boolean;
  setLoggedIn: () => void;
  setSearchText: (text: number) => void;
}

const useQueryStore = create<QueryStore>((set) => ({
  searchText: 0,
  isLoggedIn: localStorage.getItem("token")? true : false,
  setSearchText: (searchText: number) => set(() => ({searchText})),
  setLoggedIn: () => set(() => ({isLoggedIn: localStorage.getItem("token")? true : false}))
}))

export default useQueryStore;