import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient('/products/category');

const useSelectedProduct = (category: string) =>{
    return useQuery({
        queryKey: ['products', category],
        queryFn: () => apiClient.selectedProduct(category)
    })
}

export default useSelectedProduct;