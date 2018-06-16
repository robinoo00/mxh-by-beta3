import React from 'react';
import withRouter from 'umi/withRouter';
import Footer from './footer'
import {Toast} from 'antd-mobile'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'dva'
import config from "../utils/config";
import lconfig from './config'

class Layout extends React.Component{
    componentWillMount() {//首页列表所需数据
        const {assignList} = this.props;
        window.work.client.GetFSData = function (data) {
            assignList(JSON.parse(data))
            sessionStorage.setItem(config.K_DATA_LIST, data);
        };
    }
    componentDidMount(){//接受绘制K线所需数据
        const {assignKData,type_choose} = this.props;
        if(!window.k_type_choose){
            window.k_type_choose = type_choose;
        }
        window.work.client.kdata = function (data) {
            const get_data = eval("(" + data + ")");
            if(get_data.length != 0 && get_data[0]['类型'] == window.k_type_choose){
                assignKData(eval("(" + data + ")"));
            }
        };
    }
    render(){
        const {children,location} = this.props;
        const pathname = location.pathname;
        const { openPages } = lconfig;
        // const has_foot = pathname === '/news' || pathname === '/discover' || pathname === '/personal';
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="page"
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}
            >
                <div key={pathname} className={pathname}>
                    <div>
                        {children}
                    </div>
                    {openPages && openPages.includes(pathname) ? <Footer/> : ''}
                    {/*{has_foot ? <Footer/> : ''}*/}
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

const mapStateToProps = state => ({
    type_choose:state.test.type_choose
})

const mapDispatchToProps = dispatch =>({
    //赋值K线数据
    assignKData: (data) => {
        dispatch({
            type: 'test/assignData',
            data: data
        })
    },
    //赋值首页列表数据
    assignList: (data) => {
        dispatch({
            type: 'home/assignList',
            data: data
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Layout))
