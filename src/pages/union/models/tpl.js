export default {
    namespace: 'union',
    state: {
        nav_index:1
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
        assignNavIndex(state,{index}){
            return {
                ...state,
                nav_index:index
            }
        }
    },

};
