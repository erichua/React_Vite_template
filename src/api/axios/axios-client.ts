import Axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { isServer, isClient } from '@/libs/helper';
import { toastEnum, toastMsg } from '@components/ui/toast';
const request_timeout = 1000;
const url = import.meta.env.VITE_BASE_URL + '';

interface ResponseObject<T> {
    data: T;
    statusCode: number;
    message: Message;
}

interface Message {
    messageCode: string;
    dataObject?: object | null;
}

const axios = Axios.create({
    baseURL: url,
    timeout: request_timeout,
    headers: {
        'Content-Type': 'application/json',
    },
});

// request interceptor
axios.interceptors.request.use((config) => {
    // Read token for anywhere, in this case directly from localStorage
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

// response interceptor
axios.interceptors.response.use(
    (response: AxiosResponse<ResponseObject<unknown>>) => {
        const data = response.data;
        console.log('response:', response);
        if (response.status === 200) {
            return response;
        }

        if (response.status === 401) {
            window.location.href = '/login';
        }
        if (response.status === 409) {
            if (isClient()) {
                const { messageCode, dataObject } = response.data.message;
                const options = dataObject
                    ? { ...dataObject, ns: 'messageCode' }
                    : { ns: 'messageCode' };
                typeof window !== 'undefined' && toastMsg(toastEnum.DANGER, messageCode);
            }

        }

        return Promise.reject(new Error(response.statusText || 'Error'));
    },
    (error: AxiosError) => {
        console.log('err:', error, error.response); // for debug
        let msg = "请求错误";
        if (error.response && error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 401:
                    window.location.href = '/login';

                    break;
                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面
                case 403:
                    window.location.href = '/login';
                    break;
                // 404请求不存在
                case 404:
                    break;
                case 406:
                    break;
                default:
                // notification.error({
                //     message: `请求错误`,
                //     description: error.response.data?.msg || 'Error',
                // });

            }
        }

        // throw new Error(error);
        return Promise.reject(error);
    },
);


export default axios;