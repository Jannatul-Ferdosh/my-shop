import APIClient from "@/services/apiClient";
import useQueryStore from "@/store";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient('/products');

const useProducts = () =>{
    const query = useQueryStore(s => s.query);
    return useQuery({
        queryKey: ['products',query],
        queryFn: () => apiClient.getAll({
            params:{
              sort: query.sort,
              sortby: query.sortby,
            }
        })
    })
}

export default useProducts;