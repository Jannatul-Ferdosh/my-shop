import type addProduct from "@/entities/addProduct";
import APIClient from "@/services/apiClient";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient('/carts');

const useAddProduct = () =>{
    return useMutation({
    mutationFn: (pid: addProduct) => apiClient.addProduct(pid),
  });
}

export default useAddProduct;