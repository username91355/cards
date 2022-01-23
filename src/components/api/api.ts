import axios from "axios";
import { IRegisterResponse } from "../../utils/types/types";

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0',
    withCredentials: true
})

export const cardsAPI = {

    login(email: string, password: string, rememberMe: boolean) {
        return instance
            .post('/auth/login', {email, password, rememberMe})
    },

    register(email: string, password: string): Promise<IRegisterResponse & string> {
        return instance
            .post('/auth/register', {email, password})
            .then(res => res.data)
            .catch(err => err.response.data.error);
    },
}
