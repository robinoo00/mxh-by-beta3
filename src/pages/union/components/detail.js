import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'

const Example = () => {
    return (
        <div styleName="mod-union">
            <div styleName="info">
                <ul>
                    <li>
                        <div styleName="tit">已赚佣金</div>
                        <div styleName="main">0.00</div>
                    </li>
                    <li>
                        <div styleName="tit">佣金比例</div>
                        <div styleName="main">6%</div>
                        <div styleName="mt10">银牌推广员</div>
                    </li>
                    <li>
                        <div styleName="tit">我的用户</div>
                        <div styleName="main">0</div>
                        <div styleName="mt10">交易 <span styleName="txt-white">0</span> 人</div>
                    </li>
                </ul>
            </div>
            <div styleName="links">
                <div styleName="mb10">复制推广链接发给朋友</div>
                <div>
                    <input type="text" defaultValue="https://cpk.cpkeys.com/?u=687059" readOnly="readonly" styleName="copy-target"/>
                        <span styleName="txt-blue">复制</span>
                </div>
                <div styleName="qrcode-mod">
                </div>
            </div>
            <div styleName="levels">
                <h3 styleName="mb15">推广员级别</h3>
                <table>
                    <tbody><tr>
                        <td>级别</td>
                        <td>下线交易<br/>用户数量</td>
                        <td>交易提成<br/>佣金比例</td>
                        <td>下线<br/>有效期</td>
                    </tr>
                    <tr>
                        <td>银牌推广员</td>
                        <td>≤9人</td>
                        <td>3%</td>
                        <td>半年</td>
                    </tr>
                    <tr>
                        <td>金牌推广员</td>
                        <td>10-49人</td>
                        <td>6%</td>
                        <td>一年</td>
                    </tr>
                    <tr>
                        <td>钻石推广员</td>
                        <td>≥50人</td>
                        <td>9%</td>
                        <td>两年</td>
                    </tr>
                    </tbody></table>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch,props) => ({
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

