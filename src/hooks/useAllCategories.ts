import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient('/products/categories');

const useAllCategories = () =>{
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => apiClient.getAll({
            params:{}
        })
    })
}

export default useAllCategories;