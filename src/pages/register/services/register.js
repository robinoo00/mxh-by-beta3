import request from '../../../utils/request'
import config from '../../../utils/config'

export function sendCode(values){
    return request(config.server + 'appapi/regcode',{
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body:values
    })
}

export function getArea() {
    return request('./cityData.min.json',{
        method:'GET'
    });
}

export function submit(values) {
    return fetch(config.server + 'appapi/regact',{
        method: 'POST',
        body: values
    }).then(checkStatus)
        .then(parseJSON).then(data => ({data})).catch(err => ({err}));
    // return request(config.server + 'appapi/regact',{
    //     method:'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    //     },
    //     body:values,
    //     type:'form'
    // })
}
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function parseJSON(response) {
    return response.json();
}
