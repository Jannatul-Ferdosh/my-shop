import type { status } from "@/entities/activeUservariable";
import type addProduct from "@/entities/addProduct";
import type AdminAddProduct from "@/entities/AdminAddProduct";
import type loginUser from "@/entities/loginUser";
import type Product from "@/entities/product";
import type SignUpUser from "@/entities/SignUpUser";
import type updateProduct from "@/entities/updateProduct";
import axios, { type AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL:'http://localhost:8765'
})

axiosInstance.interceptors.request.use((config)=>{
  const token = localStorage.getItem("token");

  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }

  return config;
})
class APIClient{
    endpoint: string;

    constructor (endpoint:string){
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) =>{
        return axiosInstance
        .get(this.endpoint, config)
        .then( res => res.data)
    }

    get = (id: number) => {
    return axiosInstance
      .get(this.endpoint + '/' + id)
      .then(res => res.data);
  }

  login(user: loginUser){
    return axiosInstance
    .post(this.endpoint, user)
    .then(res => res.data)
  }

  SignUp(user: SignUpUser){
    return axiosInstance
    .post(this.endpoint, user)
    .then(res => res.data)
  }

  addProduct(pid: addProduct){
    return axiosInstance
    .post(this.endpoint, pid)
    .then(res => res.data)
  }

  deleteProduct(id: number) {
    return axiosInstance
    .delete(this.endpoint + '/' + id)
    .then(res => res.data);
  }

  updateProduct(id: number, qn: updateProduct){
    return axiosInstance
    .put(this.endpoint + '/' + id, qn)
    .then(res => res.data);
  }

  selectedProduct(category: string, config: AxiosRequestConfig){
    return axiosInstance
    .get(this.endpoint + '/' + category,config)
    .then(res => res.data);
  }

  AdminAddProduct(prd: AdminAddProduct){
    return axiosInstance
    .post(this.endpoint, prd)
    .then(res => res.data);
  }

  AdminUpdateProduct(pid:number, prd: Product){
    return axiosInstance
    .put(this.endpoint + '/' + pid, prd)
    .then(res => res.data);
  }

  activeUser(id: number, status: status){
    return axiosInstance
    .patch(this.endpoint + '/' + id + "/active", status)
    .then(res => res.data);
  }
}

export default APIClient;