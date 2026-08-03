import type SignUpUser from "@/entities/SignUpUser";
import APIClient from "@/services/apiClient";
import { useMutation } from "@tanstack/react-query";

const apiClient = new APIClient('/users');

const useSignUp = () =>{
    return useMutation({
        mutationFn: (user: SignUpUser) => apiClient.SignUp(user)
    })
}

export default useSignUp;