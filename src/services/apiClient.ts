import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://fakestoreapi.com'
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
}

export default APIClient;