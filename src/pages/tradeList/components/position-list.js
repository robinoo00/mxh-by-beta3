import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import React from 'react'
import Button from '../../../components/button/button'
import {Modal,Toast} from 'antd-mobile'

const alert = Modal.alert;
let id = 0;

class Example extends React.Component {
    componentDidMount() {
        const {getPositionList} = this.props;
        id = setInterval(getPositionList, 1000);
    }

    componentWillUnmount() {
        clearInterval(id);
    }

    render() {
        const {list, ping, earn, pingAll} = this.props;
        return (
            <div>
                {list.map((item, index) => (
                    <div key={"position_item_" + index} styleName="trade-wrap">
                        <ul styleName="row-1">
                            <li styleName="txt-s16">
                                {item['2']}
                                {/*<i styleName="trade-number">{item['2']}</i>*/}
                            </li>
                            <li styleName="last-cell">保证金:{item['6']}</li>
                        </ul>
                        <div styleName="row-2">
                            <ul styleName="clearfix">
                                <li styleName="fl">
                                    <p styleName="title"
                                       style={item['7'] < 0 ? {color: '#01B28E'} : {color: '#E34C4D'}}>{item['3'] === 0 ? "买入" : "卖出"}{item['4']}手</p>
                                    <p>均价&nbsp;&nbsp;{item['5']}</p>
                                    {/*<p>卖出&nbsp;&nbsp;271.2</p>*/}
                                </li>
                                <li styleName="fl">
                                    <p styleName="title"
                                       style={item['7'] < 0 ? {color: '#01B28E'} : {color: '#E34C4D'}}>{item['7']}</p>
                                    {/*<>盈亏&nbsp;&nbsp;{item['7']}</>*/}
                                    {/*<p>止损点&nbsp;&nbsp;272.4</p>*/}
                                </li>
                                <li styleName="fr" style={{paddingTop: '.15rem'}}>
                                    <div styleName="state-blue" onClick={ping(item['3'], item['2'], item['4'])}>平仓</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
                <div style={{height:'92px'}}>
                    <div styleName="mod-sell-footer">
                        <p styleName="txt-wrap">持仓盈亏 <span
                            style={earn < 0 ? {color: '#01B28E'} : {color: '#E34C4D'}}>{earn}</span></p>
                        <Button callBack={pingAll(list)} title={'全部平仓'}/>
                    </div>
                </div>
            </div>
        )
    }
}

let sell_item_index = 1;

class SellItem extends React.Component {
    state = {
        index: 1
    }
    choose = index => () => {
        sell_item_index = index;
        this.setState({
            index: index
        })
    }

    render() {
        const index = this.state.index;
        return (
            <div className={styles.sell_wrap}>
                <div onClick={this.choose(1)} className={index === 1 ? styles.sell_item_choose : styles.sell_item}>
                    即时平仓
                </div>
                {/*<div onClick={this.choose(2)} className={index === 2 ? styles.sell_item_choose : styles.sell_item}>*/}
                    {/*<p>即时卖出</p>*/}
                    {/*<p>马上<span style={{color: '#01B28E'}}>看跌</span></p>*/}
                {/*</div>*/}
            </div>
        )
    }
}

let sell_all_index = 1;

class SellAll extends React.Component {
    state = {
        index: 1,
        num_all:0,
        num_buy:0,
        num_sell:0
    }
    choose = index => () => {
        sell_all_index = index;
        this.setState({
            index: index
        })
    }
    componentWillMount(){
        const list = this.props.list;
        let num_buy = this.state.num_buy;
        let num_sell = this.state.num_sell;
        for(let item of list){
            if(item['3'] === 0){
                num_buy ++
            }
            if(item['3'] === 1){
                num_sell ++
            }
        }
        this.setState({
            num_all:list.length,
            num_buy:num_buy,
            num_sell:num_sell
        })
    }

    render() {
        const index = this.state.index;
        return (
            <div className={styles.all_sell_options}>
                <ul>
                    <li onClick={this.choose(1)}>
                        <span className={index === 1 ? styles.all_sell_checked : styles.all_sell_check}></span>
                        <span>共{this.state.num_all}笔 &gt; 全部即时平仓</span>
                    </li>
                    {this.state.num_buy != 0 ? <li onClick={this.choose(2)}>
                        <span className={index === 2 ? styles.all_sell_checked : styles.all_sell_check}></span>
                        <span><span style={{color: '#E34C4D'}}>买入共{this.state.num_buy}笔</span> &gt; 全部即时平仓</span>
                    </li>: ''}
                    {this.state.num_sell != 0 ? <li onClick={this.choose(3)}>
                        <span className={index === 3 ? styles.all_sell_checked : styles.all_sell_check}></span>
                        <span><span style={{color: '#01B28E'}}>卖出共{this.state.num_sell}笔</span> &gt; 全部即时平仓</span>
                    </li>: ''}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list: state.tradeList.position_list,
    earn: state.tradeList.earn
})

const mapDispatchToProps = (dispatch, props) => ({
    pingAll: list => () => {
        if(list.length != 0 ){
            alert('', <SellAll list={list}/>, [
                {
                    text: '取消', onPress: () => {
                    }
                },
                {
                    text: '确定', onPress: () => {
                        let direction = -1;
                        if (sell_all_index === 1) {
                            dispatch({
                                type: 'tradeList/pingAll',
                            })
                        }
                        if (sell_all_index === 2) {
                            dispatch({
                                type: 'tradeList/pingAll',
                                direction:0
                            })
                        }
                        if (sell_all_index === 3) {
                            dispatch({
                                type: 'tradeList/pingAll',
                                direction:1
                            })
                        }
                    }
                }
            ])
        }else{
            Toast.info('还未持仓')
        }
    },
    ping: (direction, code, num) => () => {
        alert('', <SellItem/>, [
            {
                text: '取消', onPress: () => {
                }
            },
            {
                text: '确定', onPress: () => {
                    dispatch({
                        type: 'tradeList/ping',
                        direction: direction,
                        code: code,
                        num: num
                    })
                    if (sell_item_index === 2) {
                        dispatch({
                            type: 'tradeList/order',
                            direction: 0,
                            code: code,
                            num: 1,
                            offset: 0
                        })
                    }
                }
            }
        ])
    },
    getPositionList: () => {
        dispatch({
            type: 'tradeList/getPositionList'
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Example, styles))

