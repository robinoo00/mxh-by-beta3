import CSSModules from 'react-css-modules'
import styles from '../styles/rule.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'

const Example = () => {
    return (
        <div>
            <Header
                title={"国内原油期货交易规则"}
            />
            <div styleName="mod-trade-rule">
                <div styleName="wrap">
                    <div styleName="pt20">
                        <table>
                            <tbody><tr>
                                <td width="30%;">交易品种</td>
                                <td width="70%">沪金</td>
                            </tr>
                            <tr>
                                <td>货币单位</td>
                                <td>人民币</td>
                            </tr>
                            <tr>
                                <td>交易单位</td>
                                <td>每手1000克</td>
                            </tr>
                            <tr>
                                <td>最小波动</td>
                                <td>0.05元/克</td>
                            </tr>
                            <tr>
                                <td>波动盈亏</td>
                                <td>每次跳动＝50元</td>
                            </tr>
                            <tr>
                                <td>交易时间</td>
                                <td>
                                    白天<br/>
                                    09:00:00 - 10:15:00<br/>
                                    10:30:00 - 11:30:00<br/>
                                    13:30:00 - 14:50:00<br/>
                                    夜间（若有）<br/>
                                    21:00:00 - 02:20:00
                                </td>
                            </tr>
                            <tr>
                                <td>清仓时间</td>
                                <td>白天 14:55:00<br/>夜间 02:25:00<br/>（以平台实际公布为准）</td>
                            </tr>
                            <tr>
                                <td>交易综合费</td>
                                <td>50元/手（以平台实际公布为准）</td>
                            </tr>
                            </tbody></table>
                    </div>
                    <p styleName="pt10">上期所沪金期货，每手1000克，最小波动0.05元（相当于最小波动盈亏50元）可买涨买跌。</p>
                </div>
                <div styleName="wrap">
                    <h3>新手练习</h3>
                    <p>如果您是新手，没有交易经验，建议您到模拟练习区进行模拟交易。</p>
                </div>
                <div styleName="wrap">
                    <h3>什么是买涨？</h3>
                    <p>当你买涨时，价格涨了你就赚钱，跌了就亏钱。</p>
                </div>
                <div styleName="wrap">
                    <h3>什么是买跌？</h3>
                    <p>当你买跌时，价格跌了你就赚钱，涨了就亏钱。</p>
                </div>
                <div styleName="wrap">
                    <h3>什么是止盈？</h3>
                    <p>当单笔交易盈利金额触发（多于等于）指定的止盈金额时，该笔交易会被强制平仓。</p>
                    <p>由于市场的价格实时都在变动，不保证平仓后最终盈利金额一定大于等于止盈金额，有可能会小于触发的止盈金额。</p>
                </div>
                <div styleName="wrap">
                    <h3>什么是止损？</h3>
                    <p>当单笔交易亏损金额触发（多于等于）指定的止损金额时，该笔交易会被强制平仓。</p>
                    <p>由于市场的价格实时都在变动，不保证卖出后最终亏损金额一定小于等于止损金额，有可能会大于止损金额。</p>
                </div>
                <div styleName="wrap">
                    <h3>什么是持仓时间？</h3>
                    <p>沪金期货最后持仓时间：白天 14:55:00、夜间 02:25:00，因品种交易割等特殊情况会提前收盘，请以品种交易页面下方提示的时间为准。</p>
                </div>
                <div styleName="wrap">
                    <h3>大涨大跌交易限制？</h3>
                    <p>交易品种涨幅&gt;=4%时禁止买涨，跌幅&gt;=4%时禁止买跌。</p>
                </div>
                <div styleName="wrap">
                    <h3>交易综合费</h3>
                    <p>沪金期货每手交易综合费：50元（买进卖出只收取一次）</p>
                </div>
                <div styleName="wrap">
                    <h3>履约保证金</h3>
                    <p>履约保证金为操盘手委托平台冻结用于履行交易亏损赔付义务的保证金。操盘手以冻结的履约保证金作为承担交易亏损赔付的上限。多出上限部分的亏损全部由合作的投资人承担。</p>
                    <p>合作交易结束后，根据结算结果，如交易盈利，操盘手冻结的履约保证金全额退还。如交易亏损，从冻结的履约保证金中，扣减操盘手所应承担的亏损赔付额，扣减后余额退还。</p>
                </div>
                <div styleName="wrap">
                    <h3>盈利如何分配？</h3>
                    <p>操盘手与投资人合作交易，盈利金额全归您。同时亏损由您承担</p>
                </div>
                <div styleName="wrap">
                    <h3>实盘交易下单</h3>
                    <p>操盘手的所有沪金交易，全部经由投资人的期货交易账户，下单到纽约商品交易所。</p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch,props) => ({
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

