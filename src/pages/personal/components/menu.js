import CSSModules from 'react-css-modules'
import styles from '../styles/personal.css'
import Link from 'umi/link'
import {Toast} from 'antd-mobile'
import router from 'umi/router'
import {connect} from 'dva'

const Example = ({elink,action}) => {
    return (
        <div>
            <div styleName="mod-menu">
                {/*<Link to={'/fund'}>*/}
                    {/*<i styleName="iconfont" data-icon="detail" style={{backgroundColor:'#5C8FE8'}}></i>*/}
                    {/*资金明细*/}
                    {/*<i styleName="mod-arrow-r"></i>*/}
                {/*</Link>*/}
                <a href="javascript:;" onClick={elink('/capital',action)}>
                    <i styleName="iconfont" data-icon="capital" style={{backgroundColor:'#bd2fe8'}}></i>
                    账户明细
                    <i styleName="mod-arrow-r"></i>
                </a>
            </div>
            <div styleName="mod-menu">
                <a href="javascript:;" onClick={elink('/myInfo',action)}>
                    <i styleName="iconfont" data-icon="my" style={{backgroundColor:'#FF9B34'}}></i>
                    个人信息
                    <i styleName="mod-arrow-r"></i>
                </a>
                {/*<a to={'/myPacket'} onClick={() => {Toast.info('未开放');return false;}}>*/}
                    {/*<i styleName="iconfont" data-icon="money" style={{backgroundColor:'#FF0000'}}></i>*/}
                    {/*我的红包*/}
                    {/*<i styleName="mod-arrow-r"></i>*/}
                {/*</a>*/}
                {/*<a to={'/union'} onClick={() => {Toast.info('未开放');return false;}}>*/}
                    {/*<i styleName="iconfont" data-icon="invite" style={{backgroundColor:'#F16A33'}}></i>*/}
                    {/*邀请好友*/}
                    {/*<i styleName="mod-arrow-r"></i>*/}
                {/*</a>*/}
                <Link to={'/setting'}>
                    <i styleName="iconfont" data-icon="setting" style={{backgroundColor:'#6e0302'}}></i>
                    设置
                    <i styleName="mod-arrow-r"></i>
                </Link>
                {/*<Link to={'/investor'}>*/}
                    {/*<i styleName="iconfont" data-icon="apply" style={{backgroundColor:'#D976A2'}}></i>*/}
                    {/*申请投资人*/}
                    {/*<i styleName="mod-arrow-r"></i>*/}
                {/*</Link>*/}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    action:state.personal.action
})

const mapDispatchToProps = dispatch => ({
    elink:(url,action) => () => {
        if(action){
            router.push(url);
        }else{
            Toast.info('当前接口关闭')
        }
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

