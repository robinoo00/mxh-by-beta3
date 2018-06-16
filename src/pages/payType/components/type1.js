import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'
import {List,WhiteSpace} from 'antd-mobile'
import icon1 from '../images/alipay.png'
import icon2 from '../images/unionpay.png'
import router from 'umi/router'
const Item = List.Item;
const Brief = Item.Brief;

const Example = () => {
    return (
        <div>
            <Header
                title={'账户充值'}
                url={'/personal'}
            />
            <List renderHeader={() => '选择支付方式'} className="my-list">
                <Item
                    onClick={() => {router.push({pathname:'/pay',query:{type:'alipay'}})}}
                    multipleLine
                    arrow={"horizontal"}
                    thumb={<img src={icon1} style={{width:'.71rem',height:'.27rem'}}/>}
                >
                    <div style={{fontSize:'.16rem',color:'#fff'}}>支付宝支付</div>
                    <Brief style={{fontSize:'.1rem'}}>手机支付，免手续费</Brief>
                </Item>
                <WhiteSpace size={"xs"} style={{backgroundColor:'#20212b'}}/>
                <Item
                    onClick={() => {router.push({pathname:'/pay',query:{type:'payunion'}})}}
                    multipleLine
                    arrow={"horizontal"}
                    thumb={<img src={icon2} style={{width:'.71rem',height:'.27rem'}}/>}
                >
                    <div style={{fontSize:'.16rem',color:'#fff'}}>银行转账</div>
                    <Brief style={{fontSize:'.1rem'}}>大额转账必选</Brief>
                </Item>
            </List>
        </div>
    );
};

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch,props) => ({
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

