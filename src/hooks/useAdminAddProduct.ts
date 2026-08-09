import { toaster } from "@/components/ui/toaster";
import type AdminAddProduct from "@/entities/AdminAddProduct";
import APIClient from "@/services/apiClient";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient('/products');

const useAdminAddProduct = () =>{
    return useMutation({
    mutationFn: (prd: AdminAddProduct) => apiClient.AdminAddProduct(prd),
    onSuccess:() => {
      toaster.create({
        description: "Added to the Product List",
        type: "success",
      })}
    }
  );
}

export default useAdminAddProduct;