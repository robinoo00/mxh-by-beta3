import request from '../../../utils/request'
import config from '../../../utils/config'

/*
* 合约2
方向3
手数4
均价5
盈亏7
保证金6
* */
export function getPositionList(values){
    return request(config.server + 'appapi/chichangzh',{
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body:values
    })
}
export function getClearList(values){
    return request(config.server + 'appapi/jsd',{
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body:values
    })
}
export function getDealText(date) {
    let key = localStorage.getItem(config.KEY);
    key = key.replace(/\+/g, '%2B');
    return fetch(config.server + 'appapi/jsd',{
        method:"POST",
        headers:{
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body:`key=${key}&date=${date}`
    }).then(
        response => {
            return response.text()
        }
    ).then(
        data => data
    ).catch(
        e => console.error(e)
    );
}

export function getDealList(values){
    return request(config.server + 'appapi/krchenjiao',{
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body:values
    })
}
export function getHistoryList(values){
    return request(config.server + 'appapi/lschenjiao',{
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body:values
    })
}

