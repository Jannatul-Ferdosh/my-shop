import APIClient from "@/services/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";


const apiClient = new APIClient("/carts/products");

const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => apiClient.deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["carts"],
      })
   }
  });
};

export default useDeleteProduct;