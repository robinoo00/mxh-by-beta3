export default {
    namespace: 'fund',
    state: {
        nav_show:false,
        nav_choose:'充值',
        nav_list:[
            {title:'充值',choose:true},
            {title:'提现',choose:false},
            {title:'收入',choose:false},
            {title:'支出',choose:false},
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

    },

    reducers: {
        toggleShow(state){
            return{
                ...state,
                nav_show:!state.nav_show
            }
        },
        assignChoose(state,{index}){
            let temp = [
                {title:'充值',choose:false},
                {title:'提现',choose:false},
                {title:'收入',choose:false},
                {title:'支出',choose:false},
            ];
            temp[index]['choose'] = true;
            return {
                ...state,
                nav_choose:temp[index]['title'],
                nav_list:[...temp]
            }
        }
    },

};
