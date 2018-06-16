import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import {getFormatTime} from "../../../utils/common";

const Example = ({nav_index,choose}) => {
    return (
        <div>
            <div style={{height:'.5rem'}}>
                <div styleName="trade-menu">
                    <ul>
                        <li onClick={choose(1)}><a styleName={nav_index === 1 ? "choose" : ""}>持仓</a></li>
                        <li onClick={choose(3)}><a styleName={nav_index === 3 ? "choose" : ""}>成交</a></li>
                        <li onClick={choose(4)}><a styleName={nav_index === 4 ? "choose" : ""}>历史</a></li>
                        <li onClick={choose(2)}><a styleName={nav_index === 2 ? "choose" : ""}>结算</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

const mapStateToProps = state => ({
    nav_index:state.tradeList.nav_index
})

const mapDispatchToProps = (dispatch,props) => ({
    choose:index => () => {
        dispatch({
            type:'tradeList/assignNavIndex',
            index:index
        })
        if(index === 1){
            dispatch({
                type:'tradeList/getPositionList',
            })
        }
        if(index === 2){
            dispatch({
                type:'tradeList/getClearList',
                date:getFormatTime()
            })
        }
        if(index === 3){
            dispatch({
                type:'tradeList/getDealList',
            })
        }
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

