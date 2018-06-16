import CSSModules from 'react-css-modules'
import styles from '../styles/personal.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'
import UserInfo from './userinfo'
import Menu from './menu'
import {Modal} from 'antd-mobile'
import router from 'umi/router'
import config from '../../../utils/config'
import React from 'react'

class Personal extends React.Component{
    componentDidMount(){
        const {getUserInfo} = this.props;
        getUserInfo();
    }
    render(){
        const {data} = this.props;
        return(
            <div>
                <Header
                    title={data.持卡人}
                    leftText={'客服'}
                    leftCallBack={() => {router.push({pathname:'/help'})}}
                    rightText={'退出'}
                    back={false}
                    rightCallBack={() => {Modal.alert('', '确定要退出当前账号吗？', [
                        { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
                        { text: '确定', onPress: () => {localStorage.removeItem(config.KEY);router.push({pathname:'/login'})} },
                    ])}}
                />
                <UserInfo/>
                <Menu/>
            </div>
        )
    }
}

// const Personal = ({data}) => {
//     return (
//         <div>
//             <Header
//                 title={data.持卡人}
//                 leftText={'客服'}
//                 leftCallBack={() => {router.push({pathname:'/help'})}}
//                 rightText={'退出'}
//                 back={false}
//                 rightCallBack={() => {Modal.alert('', '确定要退出当前账号吗？', [
//                     { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
//                     { text: '确定', onPress: () => {sessionStorage.removeItem(config.KEY);router.push({pathname:'/login'})} },
//                 ])}}
//             />
//             <UserInfo/>
//             <Menu/>
//         </div>
//     );
// };

const mapStateToProps = state => ({
    data:state.personal.data
})

const mapDispatchToProps = (dispatch,props) => ({
    getUserInfo:() => {
        dispatch({
            type:'personal/getUserInfo'
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Personal, styles))

