import CSSModules from 'react-css-modules'
import styles from '../styles/myinfo.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'
import {List} from 'antd-mobile'
import icon from '../images/icon-head.png'
import router from 'umi/router'
const Item = List.Item;

const Example = ({data}) => {
    return (
        <div>
            <Header
                title={'我的信息'}
                url={'/personal'}
            />
            <List>
                <Item
                    thumb={<img style={{width:'.5rem',height:'auto',margin:'0.25rem 0'}} src={icon}/>}
                ><div style={{fontSize:'.2rem',color:'#fff'}}>{data.持卡人}</div></Item>
            </List>
            <List style={{marginTop:'.1rem'}}>
                <Item
                    extra={data.账号}
                    // arrow={'horizontal'}
                >账号</Item>
                <Item
                    onClick={() => {router.push({pathname:'/myInfoModify'})}}
                    extra={'修改'}
                    arrow={'horizontal'}
                >登录密码</Item>
            </List>
            <List style={{marginTop:'.1rem'}}>
                <Item
                    extra={data.手机}
                    // arrow={'horizontal'}
                >手机号码</Item>
                <Item
                    extra={data.身份证号}
                    wrap={true}
                    // arrow={'horizontal'}
                >身份证号</Item>
            </List>
            <List style={{marginTop:'.1rem'}}>
                <Item
                    extra={data.绑定卡号}
                    // arrow={'horizontal'}
                >我的银行卡</Item>
                <Item
                    extra={data.持卡人}
                    // arrow={'horizontal'}
                >持卡人</Item>
                <Item
                    extra={data.银行}
                    // arrow={'horizontal'}
                >银行</Item>
            </List>
        </div>
    );
};

const mapStateToProps = state => ({
    data:state.personal.data
})

const mapDispatchToProps = (dispatch,props) => ({
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

