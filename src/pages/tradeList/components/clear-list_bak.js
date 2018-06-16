import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import {DatePicker} from 'antd-mobile'
import {getFormatTime} from "../../../utils/common";

const Example = ({...rest}) => {
    return (
        <div>
            <div styleName="trade-wrap">
                <ul styleName="row-1">
                    <li styleName="txt-s16">
                        沪金－AU1806
                        <i styleName="trade-number">ID100011</i>
                    </li>
                    <li styleName="last-cell">触发休市平仓</li>
                </ul>
                <div styleName="row-2">
                    <ul styleName="clearfix">
                        <li styleName="fl">
                            <p styleName="title" style={{color:'#01B28E'}}>看跌1手</p>
                            <p>买入&nbsp;&nbsp;271.2</p>
                            <p>卖出&nbsp;&nbsp;271.2</p>
                        </li>
                        <li styleName="fl">
                            <p styleName="title" style={{color:'#E34C4D'}}>0</p>
                            <>止盈点&nbsp;&nbsp;267.6</>
                            <p>止损点&nbsp;&nbsp;272.4</p>
                        </li>
                        <li styleName="fr" style={{paddingTop:'.15rem'}}>
                            <div styleName="state">结算成功</div>
                        </li>
                    </ul>
                </div>
                <div styleName="row-3">
                    <ul>
                        <li styleName="clearfix">买入类型<span styleName="fr">市价买入</span></li>
                        <li styleName="clearfix">买入时间<span styleName="fr">2018.04.27 14:34:16</span></li>
                        <li styleName="clearfix">结算时间<span styleName="fr">2018.04.27 14:55:00</span></li>
                    </ul>
                    <div  styleName="desc ">收起</div>
                </div>
            </div>
            <div styleName="mod-sell-footer">
                <DatePicker
                    mode="date"
                    title="选择日期"
                    extra="Optional"
                    onChange={rest.chooseTime}
                >
                    <p styleName="txt-wrap">{rest.now}</p>
                </DatePicker>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    now:state.tradeList.clear_time ? state.tradeList.clear_time :getFormatTime()
})

const mapDispatchToProps = (dispatch,props) => ({
    chooseTime:(date) => {
        const nd = (new Date(date)).valueOf();
        const date_choose = getFormatTime(nd);
        dispatch({
            type:'tradeList/getClearList',
            date:date_choose
        })
    }
})



export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

