import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient('/products')
const useProducts = () =>{
return useQuery({
    queryKey: ['products'],
    queryFn: () => apiClient.getAll()
})
}

export default useProducts;