import {instance} from './api';
import {IDefaultResponse, IRegisterResponse, IUser} from '../utils/types/types';

export const authAPI = {

    login(email: string, password: string, rememberMe: boolean): Promise<IUser> {
        return instance
            .post<IUser>('/auth/login', {email, password, rememberMe})
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

    logout(): Promise<IDefaultResponse> {
        return instance
            .delete<IDefaultResponse>('/auth/me', {})
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

    forgotPassword(email: string): Promise<IDefaultResponse> {
        return instance
            .post<IDefaultResponse>('/auth/forgot', {
                email: email,
                from: "test-front-admin <reactdev31390@yandex.ru>",
                message:
                    `<div style="background-color: lime; padding: 15px">Password recovery link: 
                    <a href='https://username91355.github.io/cards/#/entering-new-password/$token$'>link</a></div>`
            })
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

    setPassword(password: string, token: string): Promise<IDefaultResponse> {
        return instance
            .post<IDefaultResponse>('/auth/set-new-password', {
                password,
                resetPasswordToken: token
            })
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
};