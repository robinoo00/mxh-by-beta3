import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'

const Example = () => {
    return (
        <div>
            <Header
                title={'我的红包'}
                url={'/personal'}
            />
            <ul styleName="mod-my-packet-head">
                <li>我收到的红包<p>10.00<em>元</em></p></li>
                <li>红包余额<p>10.00<em>元</em></p></li>
            </ul>
            <div styleName="mod-act-packet-list">
                <div styleName="wrap">
                    <div styleName="list">
                        <div styleName="tit">
                            <p styleName="txt-s14">完成模拟交易3次送红包</p>
                            <p styleName="desc">04-26 10:06</p>
                        </div>
                        <span styleName="fr">+10.00元</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch, props) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Example, styles))

