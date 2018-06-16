import * as CapitalServices from '../services/tpl'
import config from "../../../utils/config";
export default {
    namespace: 'capital',
    state: {
        data:[
            {title:'可用资金',value:0,key:10},
            {title:'优先资金',value:0,key:'优先'},
            {title:'劣后资金',value:0,key:'劣后'},
            {title:'静态权益',value:0,key:11},
            {title:'动态权益',value:0,key:12},
            {title:'入金金额',value:0,key:3},
            {title:'出金金额',value:0,key:4},
            {title:'手续费',value:0,key:8},
            {title:'持仓盈亏',value:0,key:9},
        ]
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({pathname,query}) => {
                if(pathname === '/capital' && localStorage.getItem(config.KEY)){
                    dispatch({
                        type:'getInfo'
                    })
                }
            })
        },
    },

    effects: {
        *getInfo({},{call,put}){
            const {data} = yield call(CapitalServices.getInfo,{});
            if(data){
                yield put({
                    type:'assignData',
                    info:data
                })
            }
        }
    },

    reducers: {
        assignData(state,{info}){
            for(let item of state.data){
                if(typeof info[item.key] != 'undefined'){
                    item['value'] = info[item.key];
                }
            }
            return {
                ...state,
                data:[...state.data]
            }
        }
    },

};
