import { create } from 'zustand';

interface QueryStore{
  searchText: number,
  setSearchText: (text: number) => void;
}

const useQueryStore = create<QueryStore>((set) => ({
  searchText: 0,
  setSearchText: (searchText: number) => set(() => ({searchText}))
}))

export default useQueryStore;