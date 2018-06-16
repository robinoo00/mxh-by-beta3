import request from '../../../utils/request'
import config from '../../../utils/config'

export function test(values){
    return request(config.server + 'appapi/test',{
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body:values
    })
}
