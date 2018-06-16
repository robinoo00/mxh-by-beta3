import fetch from 'dva/fetch';
import config from './config'
import router from 'umi/router'
import {Toast} from 'antd-mobile'

function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
    if (options.type !== 'form' && options.method === 'POST' && typeof options.body !== 'undefined' && typeof options.body === 'object') {
        const body = options.body;
        if (localStorage.getItem(config.KEY)) {
            const key = localStorage.getItem(config.KEY).replace(/\+/g, '%2B');
            body['key'] = key;
        }
        const keys = Object.keys(body);
        let querystring = '';
        keys.map(key => {
            querystring += key + '=' + body[key] + '&'
        })
        querystring = querystring.substring(0, querystring.length - 1);
        options.body = querystring;
    }
    if (options.method === 'GET' && typeof options.data !== 'undefined') {
        const data = options.data;
        if (localStorage.getItem(config.KEY)) {
            const key = localStorage.getItem(config.KEY).replace(/\+/g, '%2B');
            data['key'] = key;
        }
        const keys = Object.keys(data);
        let querystring = '';
        keys.map(key => {
            querystring += key + '=' + data[key] + '&'
        })
        querystring = querystring.substring(0, querystring.length - 1);
        url = url + '?' + querystring
    }
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => ({data}))
        .catch(err => {
            console.log(err);
            if (err.toString() == 'TypeError: Failed to fetch') {
                Toast.info('账号异常,请重新登录');
                router.push({
                    pathname: '/login'
                })
                return {data:""};
            }else{
                // Toast.info('连接异常');
                return {data:""};
            }
        });
    // return fetch(url, options)
    //     .then(checkStatus)
    //     .then(parseJSON)
    //     .then(data => ({data}))
    //     .catch(err => ({err}));
}
