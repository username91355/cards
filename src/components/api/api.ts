import axios from "axios";
import {IRegisterResponse, IUser} from "../../utils/types/types";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    // baseURL: 'http://localhost:7542/2.0',
    withCredentials: true
})

export const cardsAPI = {

    login(email: string, password: string, rememberMe: boolean) {
        return instance
            .post('/auth/login', {email, password, rememberMe})
            .then(res => res.data)
            .catch(err => {
                if (err.response) {
                    throw err.response.data.error;
                } else if (err.request) {
                    throw 'Request error';
                } else {
                    throw err.message;
                }
            });
    },

    logout() {
        return instance
            .delete('/auth/me', {})
            .then(res => res.data)
            .catch(err => {
                if (err.response) {
                    throw err.response.data.error;
                } else if (err.request) {
                    throw 'Request error';
                } else {
                    throw err.message;
                }
            });
    },

    me(): Promise<IUser & string> {
        return instance
            .post('/auth/me', {})
            .then(res => res.data)
            .catch(err => {
                if (err.response) {
                    throw err.response.data.error;
                } else if (err.request) {
                    throw 'Request error';
                } else {
                    throw err.message;
                }
            });
    },

    register(email: string, password: string): Promise<IRegisterResponse & string> {
        return instance
            .post('/auth/register', {email, password})
            .then(res => res.data)
            .catch(err => err.response.data.error);
    },

    forgotPassword(email: string): Promise<IRegisterResponse & string> {
        return instance
            .post('/auth/register', {
                email: email,
                from: "test-front-admin <reactdev31390@yandex.ru>",
                message:
                    `<div style="background-color: lime; padding: 15px"> password recovery link: 
                    <a href='http://localhost:3000/#/set-new-password/$token$'>
                    link</a></div>`
            })
            .then(res => res.data)
            .catch(err => err.response.data.error);
    },

}
