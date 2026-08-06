import type addProduct from "@/entities/addProduct";
import type loginUser from "@/entities/loginUser";
import type SignUpUser from "@/entities/SignUpUser";
import type updateProduct from "@/entities/updateProduct";
import axios from "axios";

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

    getAll = () =>{
        return axiosInstance
        .get(this.endpoint)
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

  getAllCategories(){
    return axiosInstance
    .get(this.endpoint)
    .then(res => res.data);
  }

}

export default APIClient;