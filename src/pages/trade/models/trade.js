import config from '../../../utils/config'
import * as TradeServices from '../services/trade'
import {Modal, Toast} from 'antd-mobile'

const prompt = Modal.prompt;

export default {
    namespace: 'trade',
    state: {
        price_type: 1,
        num: 1,
        list: [],
        code: '',
        code_name: '',
        buy_num: 0,
        sell_num: 0,
        limit_price: 0,
        no_trade: false,//非交易时间段
    },
    subscriptions: {
        setup({dispatch, history}) {
            return history.listen(({pathname, query}) => {
                if (pathname === '/trade' && localStorage.getItem(config.KEY)) {
                    dispatch({
                        type: 'assignCode',
                        code: query.code
                    })
                    dispatch({
                        type: 'getList'
                    })
                    dispatch({
                        type: 'assignNoTrade',
                        bool: false
                    })
                    if (query.code) {
                        sessionStorage.setItem(config.TRADE_CODE, query.code);
                    }
                }
            })
        },
    },

    effects: {
        * order({direction, offset}, {call, put, select}) {
            const no_trade = yield select(state => state.trade.no_trade);
            // if(no_trade){
            //     window.toast('非交易时段');
            //     Toast.hide();
            //     return;
            // }
            const price_type = yield select(state => state.trade.price_type);
            const code = yield select(state => state.trade.code);
            const num = yield select(state => state.trade.num);
            const post_data = {
                instrument: code,
                direction: direction,
                volume: num,
                offset: offset
            }
            //市价
            if (price_type === 1) {
                const {data} = yield call(TradeServices.order, post_data);
                if (data) {
                    if (data.信息 === 'api error') {
                        window.toast('交易失败')
                    } else {
                        window.toast(data.信息)
                    }
                } else {
                    window.toast('交易失败')
                }
            }
            //限价
            if (price_type === 2) {
                const price = yield select(state => state.trade.limit_price);
                post_data['price'] = price;
                const {data} = yield call(TradeServices.limitOrder,post_data);
                if(data){
                    if(data.状态){
                        window.toast(data.信息);
                    }else{
                        window.toast('交易失败');
                    }
                }
            }
            Toast.hide();
        },
        * ping({direction}, {put, call, select}) {
            const code = yield select(state => state.trade.code);
            const {data} = yield call(TradeServices.getOffect, {pz: code, fx: direction});
            if (data) {
                if (data.数量 === 0) {
                    window.toast('还未持仓');
                    Toast.hide();
                } else {
                    const offset = data.昨仓 ? 1 : 3;
                    yield put({
                        type: 'order',
                        direction: direction === 0 ? 1 : 0,
                        offset: offset
                    })
                }
            } else {
                Toast.info('交易失败');
                Toast.hide();
            }

        },
        //顶部下拉列表
        * getList({}, {put, select}) {
            let list = yield select(state => state.home.list);
            const code = yield select(state => state.trade.code);
            if (list.length == 0) {
                list = JSON.parse(sessionStorage.getItem(config.K_DATA_LIST));
            }
            if (list && code) {
                const code_name = list.filter(item => item.合约 === code)[0]['合约别名'];
                yield put({
                    type: 'assignList',
                    data: list
                })
                yield put({
                    type: 'assignCodeName',
                    name: code_name
                })
            }
        },
        //获取平买 平卖数量
        * getPingNum({}, {select, put, call}) {
            const no_trade = yield select(state => state.trade.no_trade);
            if (!no_trade) {
                const code = yield select(state => state.trade.code);
                const buy_data = yield call(TradeServices.getOffect, {pz: code, fx: 0});
                const sell_data = yield call(TradeServices.getOffect, {pz: code, fx: 1});
                if (buy_data.data != '' && sell_data.data != '') {
                    yield put({
                        type: 'assignPingNum',
                        buy_num: buy_data.data.数量,
                        sell_num: sell_data.data.数量
                    })
                } else {
                    yield put({
                        type: 'assignNoTrade',
                        bool: true
                    })
                }
            }
        }
    },

    reducers: {
        assignLimitPirce(state, {price}) {
            return {
                ...state,
                limit_price: price
            }
        },
        assignNoTrade(state, {bool}) {
            return {
                ...state,
                no_trade: bool
            }
        },
        assignPingNum(state, {buy_num, sell_num}) {
            return {
                ...state,
                buy_num: buy_num,
                sell_num: sell_num
            }
        },
        assignCodeName(state, {name}) {
            return {
                ...state,
                code_name: name
            }
        },
        assignNum(state, {num}) {
            num = num <= 1 ? 1 : num;
            return {
                ...state,
                num: num
            }
        },
        assignCode(state, {code}) {
            return {
                ...state,
                code: code
            }
        },
        assignList(state, {data}) {
            data.map(item => {
                item['label'] = item.合约别名
                item['value'] = item.合约
            });
            return {
                ...state,
                list: data
            }
        },
        assignPriceType(state, {value}) {
            return {
                ...state,
                price_type: value
            }
        },
    },

};
