import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'
import {List,WhiteSpace,Modal} from 'antd-mobile'
import icon1 from '../images/icon.png'
import router from 'umi/router'
import React from 'react'
const Item = List.Item;
const Brief = Item.Brief;

class Example extends React.Component{
    componentDidMount(){
        Modal.alert('',<img style={{width:'100%'}} src={'http://106.15.59.190:1022/sm101.png?time='+new Date().valueOf()}/>,[
            {text:'我已知晓',onPress:() => {}}
        ])
    }
    render(){
        return(
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
                        <div style={{fontSize:'.16rem',color:'#fff'}}>银联支付</div>
                        <Brief style={{fontSize:'.1rem'}}>手机支付，免手续费</Brief>
                    </Item>
                    <WhiteSpace size={"xs"} style={{backgroundColor:'#20212b'}}/>
                </List>
            </div>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch,props) => ({
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

