import APIClient from "@/services/apiClient";
import useQueryStore from "@/store";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient('/users');

const useAllUsers = () =>{
    const isLoggedIn = useQueryStore(s => s.isLoggedIn);
    return useQuery({
        queryKey: ['users',isLoggedIn],
        queryFn: () => apiClient.getAll({
            params:{}
        })
    })
}

export default useAllUsers;