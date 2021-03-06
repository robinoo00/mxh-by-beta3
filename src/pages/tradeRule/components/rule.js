import CSSModules from 'react-css-modules'
import styles from '../styles/rule.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'
import React from 'react'
import TradeYuanYou from './rule-yuanyou'
import TradeGold from './rule-gold'
import TradeSliver from './rule-silver'
import TradeApple from './rule-apple'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

const tabs = [
    { title: <Badge>原油</Badge> },
    { title: <Badge>黄金</Badge> },
    { title: <Badge>白银</Badge> },
    { title: <Badge>苹果</Badge> },
];
class Example extends React.Component{
    render(){
        return(
            <div>
                <Header
                    title={"品种交易规则"}
                />
                <div styleName="mod-trade-rule">
                        <Tabs
                            tabs={tabs}
                            swipeable={false}
                            tabBarBackgroundColor={'#262834'}
                            initialPage={tabs.indexOf(tabs.filter(item => item.choose)[0])}
                            onChange={(tab, index) => {
                                // console.log('onChange', index, tab);
                            }}
                            // onTabClick={choose}
                        >
                            <TradeYuanYou/>
                            <TradeGold/>
                            <TradeSliver/>
                            <TradeApple/>
                        </Tabs>
                    <div>
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
            </div>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch,props) => ({
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

