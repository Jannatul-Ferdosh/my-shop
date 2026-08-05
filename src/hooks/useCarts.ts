import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient('/carts');

const useCarts = () =>{
    return useQuery({
        queryKey: ['carts'],
        queryFn: () => apiClient.getAll()
    })
}

export default useCarts;