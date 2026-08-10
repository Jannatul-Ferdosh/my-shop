import { toaster } from "@/components/ui/toaster";
import type Product from "@/entities/product";
import APIClient from "@/services/apiClient";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient('/products');

const useAdminUpdateProduct = () =>{
    return useMutation({
    mutationFn: (prd: Product) => apiClient.AdminUpdateProduct(prd),
    onSuccess:() => {
      toaster.create({
        description: "Updated the Product",
        type: "success",
      })}
    }
  );
}

export default useAdminUpdateProduct;