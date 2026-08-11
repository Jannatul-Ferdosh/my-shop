import { toaster } from "@/components/ui/toaster";
import type AdminAddProduct from "@/entities/AdminAddProduct";
import APIClient from "@/services/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const apiClient = new APIClient('/products');

const useAdminAddProduct = () =>{
  const navigate = useNavigate();
  const queryClient = useQueryClient();
    return useMutation({
    mutationFn: (prd: AdminAddProduct) => apiClient.AdminAddProduct(prd),
    onSuccess:() => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      })
      toaster.create({
        description: "Added to the Product List",
        type: "success",
      })
      navigate("/AllProducts")
    }
    }
  );
}

export default useAdminAddProduct;