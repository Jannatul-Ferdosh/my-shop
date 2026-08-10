import type activeUserVariable from "@/entities/activeUservariable";
import APIClient from "@/services/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";


const apiClient = new APIClient("/users");

const useActiveUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({id, status}: activeUserVariable) => apiClient.activeUser(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      })
   }
  });
};

export default useActiveUser;