import APIClient from "@/services/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";


const apiClient = new APIClient("/carts");

const useDeleteCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => apiClient.delete(id),

    // onSuccess: () => {
    //   queryClient.invalidateQueries({
    //     queryKey: ["carts"],
    //   });
    // },
  });
};

export default useDeleteCart;