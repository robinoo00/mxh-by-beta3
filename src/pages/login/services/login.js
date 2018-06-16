import request from '../../../utils/request'
import config from '../../../utils/config'

export function Login(values){
    return request(config.server + 'appapi/login',{
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body:values
    })
}
