import * as WithDrawServices from '../services/tpl'
import config from '../../../utils/config'
import {Toast, Modal} from 'antd-mobile'
import router from 'umi/router'

export default {
    namespace: 'withdraw',
    state: {
        // list:[
        //     {title:'金额',name:'money'},
        //     {title:'密码',name:'pass'}
        // ]
    },
    subscriptions: {
        setup({dispatch, history}) {
            return history.listen(({pathname, query}) => {
                if (pathname === '/') {

                }
            })
        },
    },

    effects: {
        * withdraw({money}, {call, put}) {
            const {data} = yield call(WithDrawServices.withdraw, {pass: localStorage.getItem(config.PASSWORD), money})
            if (data) {
                if (data.状态) {
                    Modal.alert('', <div>
                        <p>申请出金成功</p>
                        <p>出金规则（每天限出一次）如下：</p>
                        <p>当日17:00前出金，资金在T1日（T为工作日）17:00前到帐。</p>
                        <p>当日17:00后出金，资金在T2日（T为工作日）17:00前到帐。</p>
                    </div>, [
                        {
                            text: '确定', onPress: () => {
                                router.push({pathname: '/personal'})
                            }
                        }
                    ])
                }else{
                    Modal.alert('', data.信息, [
                        {
                            text: '确定', onPress: () => {}
                        }
                    ])
                }
                // Toast.info(data.信息);
                // if(data.状态){
                //     router.push({pathname:'/personal'})
                // }
            }
        }
    },

    reducers: {},

};
