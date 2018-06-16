import {List} from 'antd-mobile'
const Item = List.Item;
const Brief = Item.Brief;

const FundList = () => (
    <div>
        <Item
            extra={<div><p style={{fontSize:'.16rem'}}>+11.00</p><p>未处理</p></div>}
        ><p style={{fontSize:'.16rem',color:'#999'}}>充值入账</p><Brief style={{fontSize:'.12rem'}}>2018-1-1 12:09:28</Brief></Item>
    </div>
)

export default FundList
