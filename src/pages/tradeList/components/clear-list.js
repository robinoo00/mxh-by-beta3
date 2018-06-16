import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import {DatePicker} from 'antd-mobile'
import {getFormatTime} from "../../../utils/common";

const Example = ({...rest}) => {
    return (
        <div>
            {rest.clear_text ? <div style={{padding:'.1rem'}}>
                <pre>{rest.clear_text}</pre>
            </div> : <p style={{textAlign:'center',padding:'.3rem 0'}}>{rest.date} 没有结算信息</p>}
            <DatePicker
                mode="date"
                title="选择日期"
                extra="Optional"
                onChange={rest.chooseTime}
            >
                <div style={{height:'48px'}}>
                    <div styleName="mod-sell-footer">
                        <p styleName="txt-wrap">{rest.date}</p>
                    </div>
                </div>
            </DatePicker>
        </div>
    );
};

const mapStateToProps = state => ({
    clear_text:state.tradeList.clear_text,
    date:state.tradeList.clear_time ? state.tradeList.clear_time :getFormatTime()
})

const mapDispatchToProps = (dispatch,props) => ({
    chooseTime:(date) => {
        const nd = (new Date(date)).valueOf();
        const date_choose = getFormatTime(nd);
        dispatch({
            type:'tradeList/getClearList',
            date:date_choose
        })
    }
})



export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

