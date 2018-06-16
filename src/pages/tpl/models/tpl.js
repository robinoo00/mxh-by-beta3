export default {
    namespace: 'tpl',
    state: {},
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

    },

};
