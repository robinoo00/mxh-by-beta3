export default {
    namespace: 'actPacket',
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
