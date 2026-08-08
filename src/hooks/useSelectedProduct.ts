import APIClient from "@/services/apiClient";
import useQueryStore from "@/store";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient('/products/category');

const useSelectedProduct = (category: string) =>{
    const query = useQueryStore(s => s.query);
    return useQuery({
        queryKey: ['products', category, query],
        queryFn: () => apiClient.selectedProduct(category,{
            params:{
              sort: query.sort,
              sortby: query.sortby
            }
        })
    })
}

export default useSelectedProduct;