import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'

const Example = () => {
    return (
        <div>
            <Header
                title={'申请投资人'}
                url={'/personal'}
            />
            <div styleName="mod-investor-wrap">
                <div styleName="content">
                    <h3>什么是期货交易平台投资人</h3>
                    <div styleName="txt-grey">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        具有合法的期货投资资格，以自主的期货账户通过期货交易平台与用户进行合作交易，按用户交易指令进行下单交易，并按合作协议和交易结果共享收益共担风险！
                    </div>
                </div>
                <div styleName="content">
                    <h3>投资人的基本要求</h3>
                    <div styleName="txt-grey">
                        <ul>
                            <li>年满18周岁，具有完全民事行为能力；</li>
                            <li>有20万美金投资资金及境外期货投资账号，50万人民币交易合作的履约保证金；</li>
                            <li>炒期经历不少于1年(以期货账号交易记录为准)；</li>
                            <li>同意并接受点买人与投资人相关交易合作协议，按协议承担风险和享有收益；</li>
                            <li>需在指定期货公司开户；</li>
                            <li>合作过程能严格执行用户交易策略；</li>
                            <li>开通期货交易平台平台账户；</li>
                            <li>通过申请审核后，需至期货交易平台平台运营方现场签署相关协议；</li>
                        </ul>
                    </div>
                </div>
                <div styleName="content">
                    <h3>投资人的重要风险提示</h3>
                    <div styleName="txt-grey">
                        作为投资人将面临的风险主要包括但不限于如下事项：
                        <ul>
                            <li>需承担合作交易跌幅超过用户最大承担范围的亏损风险；</li>
                            <li>需承担网络通讯、系统等不可控的造成的投资亏损风险；</li>
                            <li>需承担无法卖出的资金占用风险；</li>
                            <li>需承担期货公司以及交易所等系统故障造成的风险；</li>
                            <li>需承担持续涨跌停导致无法卖出的风险；</li>
                            <li>需知晓中止止损会因行情延迟以及发出止损指令的延时性造成的亏损风险；</li>
                            <li>需承担超出用户认可的时限内完成交易的价格偏差风险；</li>
                            <li>需承担交易合作可能不盈利导致无收益分享的风险；</li>
                        </ul>
                    </div>
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

