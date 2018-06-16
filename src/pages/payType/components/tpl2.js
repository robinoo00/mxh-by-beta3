import Header from '../../../components/header/header'
import {List,WhiteSpace} from 'antd-mobile'
import icon1 from '../images/alipay.png'
import router from 'umi/router'
import config from "../../../utils/config";
const Item = List.Item
const Brief = Item.Brief

const Tpl2 = () => (
    <div>
        <Header
            title={'账户充值'}
            url={'/personal'}
        />
        <List renderHeader={() => '选择支付方式'} className="my-list">
            <Item
                // onClick={() => {router.push({pathname:'/pay',query:{type:'alipay'}})}}
                onClick={() => {window.location.href = `http://800.hicaopan.com/capital/niubipay1?account=${localStorage.getItem(config.ACCOUNT)}`}}
                multipleLine
                arrow={"horizontal"}
                thumb={<img src={icon1} style={{width:'.71rem',height:'.27rem'}}/>}
            >
                <div style={{fontSize:'.16rem',color:'#fff'}}>支付宝支付</div>
                <Brief style={{fontSize:'.1rem'}}>手机支付，免手续费</Brief>
            </Item>
            <WhiteSpace size={"xs"} style={{backgroundColor:'#20212b'}}/>
        </List>
        {/*<section style={{marginTop:'25px'}}>*/}
            {/*<p style={{textAlign:'center',lineHeight:'28px',fontSize:'.15rem'}}>上海始黎信息科技有限公司<br/>*/}
            {/*583657257900015<br/>*/}
                {/*浙江民泰银行上海杨浦支行</p>*/}
            {/*<p style={{textAlign:'center',lineHeight:'44px',fontSize:'.12rem',color:'#E34C4D'}}>注意：汇款后如账户10分钟后还没到账，请联系客服</p>*/}
        {/*</section>*/}
    </div>
)

export default Tpl2
