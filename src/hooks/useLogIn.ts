import type loginUser from "@/entities/loginUser";
import APIClient from "@/services/apiClient";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient('/auth/login');

const useLogIn = () =>{
    return useMutation({
    mutationFn: (user: loginUser) => apiClient.login(user),
  });
}

export default useLogIn;