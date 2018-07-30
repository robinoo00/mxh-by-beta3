import CSSModules from 'react-css-modules'
import styles from '../styles/home.css'
// import icon1 from '../images/hangqing@2x.png'
// import icon2 from '../images/hongbao@2x.png'
// import Link from 'umi/link'
import {connect} from 'dva'
import {Modal,Toast} from 'antd-mobile'
import router from 'umi/router'
import config from '../../../utils/config'
import React from 'react'
import ad from '../images/advertising.png'

const alert = Modal.alert;

const HomeNav = ({simulation}) => (
    <div style={{marginTop:'.1rem'}}>
        <img style={{width:'100%',display:'block'}} src={ad} alt=""/>
    </div>
    // <div styleName="m-links">
    //     <div styleName="item">
    //         <a styleName="link" onClick={simulation}>
    //             <div styleName="img">
    //                 <img src={icon1} alt=""/>
    //             </div>
    //             <div styleName="title">模拟练习</div>
    //             <div styleName="tip">模拟账号登录</div>
    //         </a>
    //     </div>
    //     <div styleName="item">
    //         <a styleName="link" to="/actPacket" onClick={() => {Toast.info('未开放')}}>
    //             <div styleName="img"><img src={icon2} alt={""}/></div>
    //             <div styleName="title">领红包</div>
    //             <div styleName="tip">惊！现金折扣卡</div>
    //         </a>
    //     </div>
    // </div>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    simulation:() => {
        alert('模拟练习', '是否重新登录模拟账号', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确定', onPress: () => {localStorage.removeItem(config.KEY);router.push({pathname:'/login'})}},
        ])
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(HomeNav, styles))

