import APIClient from "@/services/apiClient";
import useQueryStore from "@/store";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient('/products');

const useProducts = () =>{
    //const searchText = useQueryStore(s => s.searchText);
    return useQuery({
        queryKey: ['products'],
        queryFn: () => apiClient.getAll({
            params: {
                //id: searchText
            }
        })
    })
}

export default useProducts;