import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient('/products');

const useProduct = (id: number) =>{
    return useQuery({
        queryKey: ['products',id],
        queryFn: () => apiClient.get(id)
    })
}

export default useProduct;