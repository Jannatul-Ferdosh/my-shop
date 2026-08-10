import APIClient from "@/services/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";


const apiClient = new APIClient("/products");

const useAdminDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => apiClient.deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      })
   }
  });
};

export default useAdminDeleteProduct;