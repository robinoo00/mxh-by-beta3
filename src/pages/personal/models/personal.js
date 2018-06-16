import * as PersonalServices from '../services/personal'
import config from '../../../utils/config'
import {Toast} from 'antd-mobile'
import * as CapitalServices from '../../capital/services/tpl'

export default {
    namespace: 'personal',
    state: {
        data:{
            持卡人:'',
            可用资金:'',
            action:false
        },
        money:{
            可用资金:0,
            自有资金:0
        }
    },
    subscriptions: {
        // setup({ dispatch, history }) {
        //     return history.listen(({pathname,query}) => {
        //         if(pathname === '/personal' && localStorage.getItem(config.KEY)){
        //             dispatch({
        //                 type:'example/checkKey',
        //                 key:localStorage.getItem(config.KEY)
        //             })
        //             dispatch({
        //                 type:'getUserInfo'
        //             })
        //         }
        //     })
        // },
    },

    effects: {
       *getUserInfo({},{call,put}){
           Toast.loading('读取中',);
           const {data} = yield call(PersonalServices.getUserInfo,{});
           const rs = yield call(CapitalServices.getInfo,{});
           if(rs.data){
               yield put({
                   type:'assignMoney',
                   data:rs.data
               })
           }
           if(data){
               Toast.hide();
               if(data.账号){
                   sessionStorage.setItem(config.ACCOUNT,data.账号)
                   yield put({
                       type:'assignData',
                       data:data,
                   })
               }else{
                   Toast.info('信息读取失败');
               }
           }else{
               Toast.info('信息读取失败');
           }
       }
    },

    reducers: {
        assignMoney(state,{data}){
          return {
              ...state,
              money:{
                  可用资金:typeof data[10] != 'undefined' ? data[10] : 0,
                  自有资金:typeof data['劣后'] != 'undefined' ? data['劣后'] : 0,
              }
          }
        },
        assignData(state,{data}){
            return {
                ...state,
                data:data,
                action:true
            }
        }
    },

};
