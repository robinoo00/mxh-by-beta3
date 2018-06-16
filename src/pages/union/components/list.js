import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'

const Example = () => {
    return (
        <div styleName="mod-union-user">
            <table>
                <colgroup>
                    <col width="35%"/>
                    <col width="30%"/>
                    <col width="35%"/>
                </colgroup>
                <tbody>
                <tr>
                    <td>用户</td>
                    <td>交易手数</td>
                    <td styleName="txt-right">注册时间</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch, props) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Example, styles))

