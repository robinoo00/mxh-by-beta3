import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import {DatePicker,WhiteSpace,List} from 'antd-mobile'
import {getFormatTime} from "../../../utils/common";
const Item = List.Item;
const Brief = Item.Brief;

const Example = ({...rest}) => {
    return (
        <div>
            <WhiteSpace size={"md"}/>
            {rest.list.length ==0 ? <p style={{textAlign:'center',padding:'.2rem 0'}}>没有相关数据 请选择日期</p> : ''}
            {rest.list.map((item,index) => (
                <div key={"deal_list_"+index}>
                    <Item
                        extra={
                            <div>
                                <p style={item['3'] === 0 ? {color:'#E34C4D'} : {color:"#01B28E"}}>{item['3'] === 0 ? "买入" : "卖出"}{item['6']}手</p>
                                <Brief>￥{item['5']}</Brief>
                            </div>}
                    >
                        <p style={{fontSize:'.17rem'}}>{item['2']} <span style={{fontSize:'.14rem'}}>（{item['4'] === 0 ? "开仓" : "平仓"}）</span></p>
                        <Brief style={{fontSize:'.1rem'}}>{rest.reBuildDate(item['8'])}&nbsp;{item['7']}</Brief>
                    </Item>
                    <WhiteSpace size={"sm"}/>
                </div>
            ))}
            <DatePicker
                mode="date"
                title="选择日期"
                extra="Optional"
                onChange={rest.chooseTime}
            >
                <div style={{height:'48px'}}>
                    <div styleName="mod-sell-footer">
                        <p styleName="txt-wrap">{rest.history_date ? rest.history_date : '请选择日期'}</p>
                    </div>
                </div>
            </DatePicker>
        </div>
    );
};

const mapStateToProps = state => ({
    list:state.tradeList.history_list,
    history_date:state.tradeList.history_date
})

const mapDispatchToProps = (dispatch,props) => ({
    chooseTime:(date) => {
        const nd = (new Date(date)).valueOf();
        const date_choose = getFormatTime(nd);
        dispatch({
            type:'tradeList/getHistoryList',
            date:date_choose
        })
    },
    reBuildDate:(date) => {
        const year = date.slice(0,4);
        const month = date.slice(4,6);
        const day = date.slice(6);
        return `${year}-${month}-${day}`
    }
})



export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

