import * as LoginServices from '../services/login'
import {Toast} from 'antd-mobile'
import router from 'umi/router'
import config from '../../../utils/config'

export default {
    namespace: 'login',
    state: {
        sev:0,
        pwd_cash:localStorage.getItem(config.PWD_CASH) === "false" ? false : true,
        account:localStorage.getItem(config.ACCOUNT) === null ? '' : localStorage.getItem(config.ACCOUNT),
        password:localStorage.getItem(config.PASSWORD) === null ? '' : localStorage.getItem(config.PASSWORD)
    },
    subscriptions: {
        // setup({ dispatch, history }) {
        //     return history.listen(({pathname,query}) => {
        //         if(pathname === '/login'){
        //             console.log(localStorage.getItem(config.ACCOUNT));
        //         }
        //     })
        // },
    },

    effects: {
        *LoginIn({values},{call,select}){
            Toast.loading('登录中...',0);
            const {data} = yield call(LoginServices.Login,values);
            const pwd_cash = yield select(state => state.login.pwd_cash);
            localStorage.setItem(config.PWD_CASH,pwd_cash);
            if(typeof data != 'undefined'){
                Toast.hide();
                if(data == ''){
                    Toast.info('登录失败');
                    return;
                }
                Toast.info(data.信息,1);
                if(data.状态){
                    localStorage.setItem(config.KEY,data.key);
                    sessionStorage.setItem(config.PASSWORD,values.password);
                    if(pwd_cash){
                        localStorage.setItem(config.PASSWORD,values.password);
                        localStorage.setItem(config.ACCOUNT,values.account);
                    }else{
                        localStorage.removeItem(config.ACCOUNT);
                        localStorage.removeItem(config.PASSWORD);
                    }
                    router.push('/personal');
                }
            }
        }
    },

    reducers: {
        assignSev(state,{sev}){
            return{
                ...state,
                sev:sev
            }
        },
        assignPwdCash(state){
            return {
                ...state,
                pwd_cash:!state.pwd_cash
            }
        }
    },

};
