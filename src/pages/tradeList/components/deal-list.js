import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import {DatePicker} from 'antd-mobile'
import {List,WhiteSpace} from 'antd-mobile'
const Item = List.Item
const Brief = Item.Brief;

const Example = ({list,reBuildDate}) => {
    return (
        <div>
            <WhiteSpace size={"md"}/>
            {list.map((item,index) => (
                <div key={"deal_list_"+index}>
                    <Item
                        extra={
                            <div>
                                <p style={item['3'] === 0 ? {color:'#E34C4D'} : {color:"#01B28E"}}>{item['3'] === 0 ? "买入" : "卖出"}{item['6']}手</p>
                                <Brief>￥{item['5']}</Brief>
                            </div>}
                    >
                        <p style={{fontSize:'.17rem'}}>{item['2']} <span style={{fontSize:'.14rem'}}>（{item['4'] === 0 ? "开仓" : "平仓"}）</span></p>
                        <Brief style={{fontSize:'.1rem'}}>{reBuildDate(item['8'])}&nbsp;{item['7']}</Brief>
                    </Item>
                    <WhiteSpace size={"sm"}/>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = state => ({
    list:state.tradeList.deal_list
})

const mapDispatchToProps = (dispatch,props) => ({
    reBuildDate:(date) => {
        const year = date.slice(0,4);
        const month = date.slice(4,6);
        const day = date.slice(6);
        return `${year}-${month}-${day}`
    }
})



export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

