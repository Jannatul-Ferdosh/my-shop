import { toaster } from "@/components/ui/toaster";
import type { UpdateAdminProduct } from "@/entities/updateAdminProduct";
import APIClient from "@/services/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const apiClient = new APIClient('/products');

const useAdminUpdateProduct = () =>{
  const navigate = useNavigate();
  const queryClient = useQueryClient();
    return useMutation({
    mutationFn: ({pid, prd}:UpdateAdminProduct) => apiClient.AdminUpdateProduct(pid,prd),
    onSuccess:() => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      })
      toaster.create({
        description: "Updated the Product",
        type: "success",
      })
      navigate("/AllProducts")
    }
    }
  );
}

export default useAdminUpdateProduct;