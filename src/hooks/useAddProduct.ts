import { toaster } from "@/components/ui/toaster";
import type addProduct from "@/entities/addProduct";
import APIClient from "@/services/apiClient";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient('/carts');

const useAddProduct = () =>{
    return useMutation({
    mutationFn: (pid: addProduct) => apiClient.addProduct(pid),
    onSuccess:() => {
      toaster.create({
        description: "Added to the cart",
        type: "success",
      })}
    }
  );
}

export default useAddProduct;