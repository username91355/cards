import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0',
    withCredentials: true
})

export const cardsAPI = {

    login(email: string, password: string, rememberMe: boolean) {
        return instance
            .post('/auth/login', {email, password, rememberMe})
            .then(res => res.data)
            .catch(err => err)
    },
}

