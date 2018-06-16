import CSSModules from 'react-css-modules'
import styles from '../styles/home.css'
import router from 'umi/router'
import React from 'react'
import config from '../../../utils/config'
import Loading from '../../../components/loading-nomore/bottom-tip'
import {connect} from 'dva'

let id = 0;

class HomeList extends React.Component {
    componentWillMount() {
        // window.hideK();
        // const {assignList} = this.props;
        // window.work.client.GetFSData = function (data) {
        //     assignList(JSON.parse(data))
        //     sessionStorage.setItem(config.K_DATA_LIST, data);
        // };
    }

    componentDidMount() {
        // const {assignList} = this.props;
        // setTimeout(() => {
        //     if (typeof window.home_data !== 'undefined') {
        //         assignList(JSON.parse(window.home_data))
        //         sessionStorage.setItem(config.K_DATA_LIST, window.home_data);
        //     }
        // })
        // id = setInterval(() => {
        //     if (typeof window.home_data !== 'undefined') {
        //         assignList(JSON.parse(window.home_data))
        //         sessionStorage.setItem(config.K_DATA_LIST, window.home_data);
        //     }
        // }, 1000)
    }

    componentWillUnmount() {
        // clearInterval(id);
    }

    render() {
        const {list} = this.props;
        return (
            <div styleName="mod-index-list">
                <div styleName="wrap">
                    <div styleName="title">
                        <span>实盘交易</span>
                    </div>
                    {list.length === 0 ? <Loading/> :
                        <div styleName="mod-menu">
                            {list.map((item, index) => (
                                <div onClick={() => {
                                    router.push({pathname: '/trade', query: {code: item.合约}})
                                }} key={'home_list_item' + index} styleName="list-item">
                                    <div styleName="tit">
                                        <p styleName="txt-s16">
                                            <span styleName="hot-wrap">{item.合约别名}<i styleName="hot"></i></span>
                                        </p>
                                        <p styleName="desc">交易所:{item.交易所}</p>
                                    </div>
                                    <span styleName="fr"
                                          style={item.涨跌幅 < 0 ? {color: '#01B28E'} : {}}>{item.最新价}<br/>{item.涨跌幅}%</span>
                                    <i styleName="mod-arrow-r"></i>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list: state.home.list
})

const mapDispatchToProps = (dispatch, props) => ({
    assignList: (data) => {
        dispatch({
            type: 'home/assignList',
            data: data
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(HomeList, styles))

