import {Axios} from "axios";
import { UserLoginReq } from 'types'

 class Api{
    private axiosInstance : Axios;

    constructor() {
        this.axiosInstance = new Axios({
            baseURL:"http://localhost:3001/",
            timeout:1000,
        })
    }

        async sendLoginReq(data : UserLoginReq){
            return (await this.axiosInstance.post('auth/login', JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })).data
    }
}
export const api = new Api()