import * as TradeListServices from '../services/tpl'
import * as TradeServices from "../../trade/services/trade";
import {Toast, Modal} from 'antd-mobile'
import config from "../../../utils/config";

const alert = Modal.alert

export default {
    namespace: 'tradeList',
    state: {
        nav_index: 1,
        position_list: [],
        clear_list: [],
        clear_text: '',
        deal_list: [],
        history_list: [],
        earn: 0,
        clear_time: '',
        history_date: ''//历史事件选择
    },
    subscriptions: {
        setup({dispatch, history}) {
            return history.listen(({pathname, query}) => {
                if (pathname === '/tradeList' && localStorage.getItem(config.KEY)) {
                    dispatch({
                        type: 'getPositionList'
                    })
                }
            })
        },
    },

    effects: {
        * order({direction, offset, code, num}, {call, select}) {
            const post_data = {
                instrument: code,
                direction: direction,
                volume: num,
                offset: offset
            }
            const {data} = yield call(TradeServices.order, post_data);
            if(data){
                if (data.信息 === 'api error') {
                    // alert('非交易时间不可交易',
                    //     <div>非交易时间不可交易<br/><br/>【沪金的买入时间】<br/>09:00 - 10:15<br/>10:30 - 11:30<br/>13:30 - 14:55<br/>21:00 - 02:25<br/>（周末节假日休市）</div>,
                    //     [
                    //         {
                    //             text:'确定',onPress:() => {}
                    //         }
                    //     ])
                    Toast.info('交易失败');
                } else {
                    Toast.info(data.信息)
                }
            }
        },
        * ping({direction, code, num}, {put, call}) {
            const {data} = yield call(TradeServices.getOffect, {pz: code, fx: direction});
            const offset = data.昨仓 ? 1 : 3;
            yield put({
                type: 'order',
                direction: direction === 0 ? 1 : 0,
                offset: offset,
                code: code,
                num: num
            })
        },
        * pingAll({direction = -1}, {put, select}) {
            const position_list = yield select(state => state.tradeList.position_list);
            for (let item of position_list) {
                if(direction === -1){
                    yield put({
                        type: 'ping',
                        direction: item['3'],
                        code: item['2'],
                        num: item['4']
                    })
                }else{
                    if(item['3'] === direction){
                        yield put({
                            type: 'ping',
                            direction: item['3'],
                            code: item['2'],
                            num: item['4']
                        })
                    }
                }
            }
        },
        * pingBuy({}, {put, select}) {

        },
        * pingSell({}, {put, select}) {

        },
        * getPositionList({}, {call, put}) {
            const {data} = yield call(TradeListServices.getPositionList, {});
            if(data != ''){
                yield put({
                    type: 'assignPositionList',
                    data: data.data
                })
            }
        },
        * getClearList({date}, {call, put}) {
            const post_date = date.replace(/\-/g, '');
            let data = yield call(TradeListServices.getDealText, post_date);
            if (data.includes('wrong')) {
                data = ''
            }
            yield put({
                type: 'assignClearText',
                data: data
            })
            yield put({
                type: 'assignClearTime',
                date: date
            })
        },
        * getDealList({}, {call, put}) {
            const {data} = yield call(TradeListServices.getDealList, {});
            if(data){
                yield put({
                    type: 'assignDealList',
                    data: data.data
                })
            }
        },
        * getHistoryList({date}, {call, put}) {
            const post_date = date.replace(/\-/g, '');
            const {data} = yield call(TradeListServices.getHistoryList, {date: post_date});
            yield put({
                type: 'assignHistoryList',
                data: data.data,
                date: date
            })
        },
    },

    reducers: {
        assignDealList(state, {data}) {
            return {
                ...state,
                deal_list: [...data]
            }
        },
        assignClearTime(state, {date}) {
            return {
                ...state,
                clear_time: date
            }
        },
        assignNavIndex(state, {index}) {
            return {
                ...state,
                nav_index: index
            }
        },
        assignPositionList(state, {data}) {
            let earn = 0;
            data.map(item => {
                earn += item['7']
            })
            return {
                ...state,
                position_list: [...data],
                earn: earn
            }
        },
        assignClearList(state, {data}) {
            return {
                ...state,
                clear_list: [...data]
            }
        },
        assignClearText(state, {data}) {
            return {
                ...state,
                clear_text: data
            }
        },
        assignHistoryList(state, {data, date}) {
            return {
                ...state,
                history_list: [...data],
                history_date: date,
            }
        }
    },

};
