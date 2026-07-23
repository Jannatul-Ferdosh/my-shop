import axios, { type AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL:'https://fakestoreapi.com'
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
}

export default APIClient;