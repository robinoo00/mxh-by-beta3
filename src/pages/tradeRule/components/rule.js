import CSSModules from 'react-css-modules'
import styles from '../styles/rule.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'
import React from 'react'

class Example extends React.Component{
    componentWillMount(){
        // window.hideK();
    }
    render(){
        return(
            <div>
                <Header
                    title={"国内原油期货交易规则"}
                />
                <div styleName="mod-trade-rule">
                    <div styleName="wrap">
                        <div styleName="pt20">
                            <table>
                                <tbody><tr>
                                    <td width="30%;">结算货币</td>
                                    <td width="70%">人民币</td>
                                </tr>
                                <tr>
                                    <td>上市交易所</td>
                                    <td>上海国际能源交易中心</td>
                                </tr>
                                <tr>
                                    <td>中文名称</td>
                                    <td>原油</td>
                                </tr>
                                <tr>
                                    <td>品种代码</td>
                                    <td style={{color:'red'}}>SC</td>
                                </tr>
                                <tr>
                                    <td>报价单位</td>
                                    <td>元（人民币）/每桶</td>
                                </tr>
                                <tr>
                                    <td>最小变动价位</td>
                                    <td>0.1</td>
                                </tr>
                                <tr>
                                    <td>交易单位</td>
                                    <td>1000桶/手</td>
                                </tr>
                                <tr>
                                    <td>最小变动值</td>
                                    <td>100元</td>
                                </tr>
                                <tr>
                                    <td>盘内保证金</td>
                                    <td>50000元</td>
                                </tr>
                                <tr>
                                    <td>交易时间</td>
                                    <td>
                                        白天<br/>
                                        09:00:00 - 10:15:00<br/>
                                        10:30:00 - 11:30:00<br/>
                                        13:30:00 - 15:00:00<br/>
                                        晚上<br/>
                                        21:00:00 - 02:30:00
                                    </td>
                                </tr>
                                <tr>
                                    <td>限制日内交易强平时间</td>
                                    <td style={{backgroundColor:'#ffff00',color:'#ff3e00'}}>14:50 和 02:20 强平</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>限制开仓条件</td>
                                    <td style={{backgroundColor:'#ffff00',color:'#ff3e00'}}>劣后资金低于强平比例</td>
                                </tr>
                                <tr>
                                    <td style={{backgroundColor:'#ffff00',color:'#ff3e00'}}>接近涨停板附近禁止卖，接近跌停板附近禁止买</td>
                                </tr>
                                <tr>
                                    <td>隔夜设置</td>
                                    <td style={{backgroundColor:'#ffff00',color:'#ff3e00'}}>目前不允许隔下午和隔夜</td>
                                </tr>
                                <tr>
                                    <td>强制平仓比例</td>
                                    <td>自有资金低于优先（授信）资金的3%</td>
                                </tr>
                                <tr>
                                    <td>最大持仓限制</td>
                                    <td>无限制，合约归属结算币种授信累计最大100手（单边持仓限100手）</td>
                                </tr>
                                <tr>
                                    <td rowSpan={5}>出入金时间</td>
                                    <td>资金入金时间：交易日时间 <br/>09:00-16:30 20:30-02:20</td>
                                </tr>
                                <tr>
                                    <td>资金出金时间：交易日时间<br/>09:00-16:30</td>
                                </tr>
                                <tr>
                                    <td>在交易日时间：16:30-20:30资金入金的客户资金将在20:30到账</td>
                                </tr>
                                <tr>
                                    <td>02:20-09:00资金入金的客户资金将在09:00到账</td>
                                </tr>
                                <tr>
                                    <td>（一天限出金3次）</td>
                                </tr>
                                </tbody></table>
                        </div>
                        {/*<p styleName="pt10">上期所沪金期货，每手1000克，最小波动0.05元（相当于最小波动盈亏50元）可买涨买跌。</p>*/}
                    </div>
                    <div styleName="wrap">
                        <h3>什么是买和平买？</h3>
                        <p>买就是开多仓，平买就是平多仓（当你买，价格涨了平买就赚钱，跌了平买就亏钱）</p>
                    </div>
                    <div styleName="wrap">
                        <h3>什么是卖和平卖？</h3>
                        <p>卖就是开空仓，平卖就是平空仓（当你卖，价格跌了平卖就赚钱，涨了平卖就亏钱）</p>
                    </div>
                    <div styleName="wrap">
                        <h3>限制日内交易强平时间？</h3>
                        <p>交易日内时间到14:50和02:20，会强平掉所有的持仓</p>
                    </div>
                    <div styleName="wrap">
                        <h3>什么是自有资金？</h3>
                        <p>自有资金就是客户自己的资金</p>
                    </div>
                    <div styleName="wrap">
                        <h3>什么是授信资金？授信区间如何区分？</h3>
                        <p>公司按照协议借款借给客户的资金。授信区间规则：<br/>
                            1）自有资金大于3000，少于5000，默认授信金额5万；<br/>
                            2）自有资金大于5000，少于1.5万，默认授信金额10万；<br/>
                            3）自有资金大于1.5万，少于2.5万，默认授信金额20万；以此类推></p>
                    </div>
                    <div styleName="wrap">
                        <h3>什么是强制平仓？</h3>
                        <p>强制平仓是公司为保护授信资金的安全，对到了强平线和强平时间的持仓进行强制平仓</p>
                    </div>
                    <div styleName="wrap">
                        <h3>什么情况下可以调整授信资金？</h3>
                        <p>1）在没有持仓时，申请入金或出金后产生自有资金变动，授信资金会按当前自有资金根据授信区间规则重新调整。<br/>
                            2）当有持仓情况下，申请入金产生劣后资金增加，授信资金保持不变<br/>
                            3）当有持仓情况下，不允许申请出金，需要平仓后再申请出金。</p>
                    </div>
                    <div styleName="wrap">
                        <h3>期市有风险，入市须谨慎</h3>
                        <p>投资者须理解并始终牢记“买者自负”的原则</p>
                    </div>
                </div>
            </div>
        )
    }
}

// const Example = () => {
//     return (
//         <div>
//             <Header
//                 title={"国内原油期货交易规则"}
//             />
//             <div styleName="mod-trade-rule">
//                 <div styleName="wrap">
//                     <div styleName="pt20">
//                         <table>
//                             <tbody><tr>
//                                 <td width="30%;">结算货币</td>
//                                 <td width="70%">人民币</td>
//                             </tr>
//                             <tr>
//                                 <td>上市交易所</td>
//                                 <td>上海国际能源交易中心</td>
//                             </tr>
//                             <tr>
//                                 <td>中文名称</td>
//                                 <td>原油</td>
//                             </tr>
//                             <tr>
//                                 <td>品种代码</td>
//                                 <td style={{color:'red'}}>SC</td>
//                             </tr>
//                             <tr>
//                                 <td>报价单位</td>
//                                 <td>元（人民币）/每桶</td>
//                             </tr>
//                             <tr>
//                                 <td>最小变动价位</td>
//                                 <td>0.1</td>
//                             </tr>
//                             <tr>
//                                 <td>交易单位</td>
//                                 <td>1000桶/手</td>
//                             </tr>
//                             <tr>
//                                 <td>最小变动值</td>
//                                 <td>100元</td>
//                             </tr>
//                             <tr>
//                                 <td>盘内保证金</td>
//                                 <td>50000元</td>
//                             </tr>
//                             <tr>
//                                 <td>交易时间</td>
//                                 <td>
//                                     白天<br/>
//                                     09:00:00 - 10:15:00<br/>
//                                     10:30:00 - 11:30:00<br/>
//                                     13:30:00 - 15:00:00<br/>
//                                     晚上<br/>
//                                     21:00:00 - 02:30:00
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>限制日内交易强平时间</td>
//                                 <td style={{backgroundColor:'#ffff00',color:'#ff3e00'}}>14:50 和 02:20 强平</td>
//                             </tr>
//                             <tr>
//                                 <td rowSpan={2}>限制开仓条件</td>
//                                 <td style={{backgroundColor:'#ffff00',color:'#ff3e00'}}>劣后资金低于强平比例</td>
//                             </tr>
//                             <tr>
//                                 <td style={{backgroundColor:'#ffff00',color:'#ff3e00'}}>接近涨停板附近禁止卖，接近跌停板附近禁止买</td>
//                             </tr>
//                             <tr>
//                                 <td>隔夜设置</td>
//                                 <td style={{backgroundColor:'#ffff00',color:'#ff3e00'}}>目前不允许隔下午和隔夜</td>
//                             </tr>
//                             <tr>
//                                 <td>强制平仓比例</td>
//                                 <td>自有资金低于优先（授信）资金的3%</td>
//                             </tr>
//                             <tr>
//                                 <td>最大持仓限制</td>
//                                 <td>无限制，合约归属结算币种授信累计最大100手（单边持仓限100手）</td>
//                             </tr>
//                             <tr>
//                                 <td rowSpan={5}>出入金时间</td>
//                                 <td>资金入金时间：交易日时间 <br/>09:00-16:30 20:30-02:20</td>
//                             </tr>
//                             <tr>
//                                 <td>资金出金时间：交易日时间<br/>09:00-16:30</td>
//                             </tr>
//                             <tr>
//                                 <td>在交易日时间：16:30-20:30资金入金的客户资金将在20:30到账</td>
//                             </tr>
//                             <tr>
//                                 <td>02:20-09:00资金入金的客户资金将在09:00到账</td>
//                             </tr>
//                             <tr>
//                                 <td>（一天限出金3次）</td>
//                             </tr>
//                             </tbody></table>
//                     </div>
//                     {/*<p styleName="pt10">上期所沪金期货，每手1000克，最小波动0.05元（相当于最小波动盈亏50元）可买涨买跌。</p>*/}
//                 </div>
//                 <div styleName="wrap">
//                     <h3>什么是买和平买？</h3>
//                     <p>买就是开多仓，平买就是平多仓（当你买，价格涨了平买就赚钱，跌了平买就亏钱）</p>
//                 </div>
//                 <div styleName="wrap">
//                     <h3>什么是卖和平卖？</h3>
//                     <p>卖就是开空仓，平卖就是平空仓（当你卖，价格跌了平卖就赚钱，涨了平卖就亏钱）</p>
//                 </div>
//                 <div styleName="wrap">
//                     <h3>限制日内交易强平时间？</h3>
//                     <p>交易日内时间到14:50和02:20，会强平掉所有的持仓</p>
//                 </div>
//                 <div styleName="wrap">
//                     <h3>什么是自有资金？</h3>
//                     <p>自有资金就是客户自己的资金</p>
//                 </div>
//                 <div styleName="wrap">
//                     <h3>什么是授信资金？授信区间如何区分？</h3>
//                     <p>公司按照协议借款借给客户的资金。授信区间规则：<br/>
//                         1）自有资金大于3000，少于5000，默认授信金额5万；<br/>
//                         2）自有资金大于5000，少于1.5万，默认授信金额10万；<br/>
//                         3）自有资金大于1.5万，少于2.5万，默认授信金额20万；以此类推></p>
//                 </div>
//                 <div styleName="wrap">
//                     <h3>什么是强制平仓？</h3>
//                     <p>强制平仓是公司为保护授信资金的安全，对到了强平线和强平时间的持仓进行强制平仓</p>
//                 </div>
//                 <div styleName="wrap">
//                     <h3>什么情况下可以调整授信资金？</h3>
//                     <p>1）在没有持仓时，申请入金或出金后产生自有资金变动，授信资金会按当前自有资金根据授信区间规则重新调整。<br/>
//                         2）当有持仓情况下，申请入金产生劣后资金增加，授信资金保持不变<br/>
//                         3）当有持仓情况下，不允许申请出金，需要平仓后再申请出金。</p>
//                 </div>
//                 <div styleName="wrap">
//                     <h3>期市有风险，入市须谨慎</h3>
//                     <p>投资者须理解并始终牢记“买者自负”的原则</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch,props) => ({
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

