import axios from 'axios'
import {ToastProgrammatic as Toast,ModalProgrammatic as Modal,NotificationProgrammatic as Notification} from 'buefy' // 项目用的buefy UI框架
import router from '../router'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = axios.create({
    timeout: 10000, // 超过7秒提示超时
    baseURL: process.env.VUE_APP_BASE_API,
    //publicPath: process.env.VUE_APP_BASE_API,
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        if(localStorage.token) {
            config.headers.token = localStorage.token;
        }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 接收后台参数状态
        const res = response.data;
        const status=response.status;//网络请求状态
        if(status == 200){
            if(res.code == 20000 ||res.code== 10000 || res.code==200 || res.data || res.ErrorCode == 20000) {
                return res;
            }else {
                let message = (res.error && res.error.message) || res.message || res.msg || '未知错误';
                Notification.open({
                    message: message,
                    duration: 5000,
                    progressBar: true,
                    pauseOnHover: true,
                    type: 'is-danger',
                    hasIcon: true
                });
                console.log('拦截器打印错误:', response.data);
                // 这里可以设置后台返回状态码是500或者是其他,然后重定向跳转
                // if(res.ErrorCode == 500) {
                //     router.push('/login')
                // }
                return Promise.reject(
                    new Error(res.message || (res.error &&res.error.message) || '未知错误')
                );
            }
        }else{
            let message = (response.error && response.error.message) || response.message || res.msg || '未知错误';
            Notification.open({
                message: message,
                duration: 5000,
                progressBar: true,
                pauseOnHover: true,
                type: 'is-danger',
                hasIcon: true
            });
            console.log('拦截器打印错误:', response);
            return Promise.reject(
                new Error(response.msg || (response.error &&response.error.message) || '未知错误')
            );
        }
    },
    error => {
        console.log('服务器错误信息:', error);
        if(error.response) {
            // error.response有错误信息,是接口错误,不是取消请求
            // 获取错误码,弹出提示信息,reject()
            let code = error.response.status;
            if(code == 401) {
                // router.push('/login');
                return Promise.reject(
                    new Error('登录过期,请重新登录')
                );
            }
            Toast.open({
                message: '服务器繁忙, 请稍后再试!  ' + code,
                type: 'is-warning',
                duration: 4 * 1000,
                position: 'is-top',
                pauseOnHover: true
            });
            return Promise.reject(error.message);
        }else {
            // 是取消请求
            // 直接reject
            return Promise.reject(error.message);
        }
    }
)
export default service;