import type { UpdateProductVariables } from "@/entities/updateProduct";
import APIClient from "@/services/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";


const apiClient = new APIClient("/carts/products");

const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({id, qn}: UpdateProductVariables) => apiClient.updateProduct(id, qn),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["carts"],
      })
   }
  });
};

export default useUpdateProduct;