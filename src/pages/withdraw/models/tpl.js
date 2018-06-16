import * as WithDrawServices from '../services/tpl'
import config from '../../../utils/config'
import {Toast} from 'antd-mobile'
import router from 'umi/router'

export default {
    namespace: 'withdraw',
    state: {
        list:[
            {title:'金额',name:'money'}
        ]
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({pathname,query}) => {
                if(pathname === '/'){

                }
            })
        },
    },

    effects: {
        *withdraw({money},{call,put}){
            const {data} = yield call(WithDrawServices.withdraw,{pass:localStorage.getItem(config.PASSWORD),money})
            if(data){
                Toast.info(data.信息);
                if(data.状态){
                    router.push({pathname:'/personal'})
                }
            }
        }
    },

    reducers: {

    },

};
