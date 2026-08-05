import APIClient from "@/services/apiClient";
import { useMutation } from "@tanstack/react-query";


const apiClient = new APIClient("/carts");

const useDeleteCart = () => {

  return useMutation({
    mutationFn: (id: number) => apiClient.delete(id),
  });
};

export default useDeleteCart;