import config from '../../../utils/config'

export default {
    namespace: 'setting',
    state: {
        trade:sessionStorage.getItem(config.TRADE_SWITCH) === null ? true : sessionStorage.getItem(config.TRADE_SWITCH) === "true" ? true : false
    },
    subscriptions: {
    },

    effects: {

    },

    reducers: {
        assignTrade(state,{checked}){
            sessionStorage.setItem(config.TRADE_SWITCH,checked)
            return{
                ...state,
                trade:checked
            }
        }
    },

};
