import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'
import banner from '../images/banner2.png'

const Example = () => {
    return (
        <div>
            <Header
                title={'红包活动'}
                url={'/'}
            />
            <div styleName="mod-act-packet-banner">
                <img src={banner} alt={""}/>
            </div>
            <div styleName="mod-act-packet-list">
                <div styleName="wrap">
                    <div styleName="list">
                        <div styleName="tit">
                            <p styleName="txt-s14">注册 <span styleName="hot-icon"></span></p>
                            <p styleName="desc">注册完成 只需30秒</p>
                        </div>
                        <span styleName="fr"><em styleName="packet-icon">10元</em><em styleName="packet-type">已领</em> </span>
                    </div>
                    <a styleName="list" href="#/payType">
                        <div styleName="tit">
                            <p styleName="txt-red">充值一次 <span styleName="hot-icon"></span></p>
                            <p styleName="desc">任意金额充值成功</p>
                        </div>
                        <span styleName="fr"><em styleName="packet-icon-on">20元</em><em styleName="packet-type">GO</em> </span>
                    </a>
                    <a styleName="list" href="#/payType">
                        <div styleName="tit">
                            <p styleName="txt-red">充值一次 <span styleName="new-icon"></span></p>
                            <p styleName="desc">任意金额充值成功</p>
                        </div>
                        <span styleName="fr"><em styleName="packet-icon-on">20元</em><em styleName="packet-type">GO</em> </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch, props) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Example, styles))

