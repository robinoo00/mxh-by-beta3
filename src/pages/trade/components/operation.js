import CSSModules from 'react-css-modules'
import styles from '../styles/trade.css'
import {connect} from 'dva'

const Example = ({...rest}) => {
    return (
        <div>
            <div styleName="type-wrap">
                <div styleName="num-choose">
                    <div styleName="del-item" onClick={rest.delNum(rest.num)}>-</div>
                    <div styleName="num-input">
                        <input type="number" onChange={rest.inputNum} value={rest.num}/>
                    </div>
                    <div styleName="add-item" onClick={rest.addNum(rest.num)}>+</div>
                </div>
                <div styleName="price-choose">
                    <div styleName="price-item" onClick={rest.chooseType(1)}>
                        <div styleName={rest.type === 1 ? "checkbox-icon-choose" : "checkbox-icon"}></div>
                        <div styleName="price-title">市价</div>
                    </div>
                    {/*<div styleName="price-item" onClick={rest.chooseType(2)}>*/}
                        {/*<div styleName={rest.type === 2 ? "checkbox-icon-choose" : "checkbox-icon"}></div>*/}
                        {/*<div styleName="price-title">限价</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    type:state.trade.price_type,
    num:state.trade.num,
})

const mapDispatchToProps = (dispatch,props) => ({
    delNum:num => () => {
        dispatch({
            type:'trade/assignNum',
            num:parseInt(num)-1
        })
    },
    addNum:num => () => {
        dispatch({
            type:'trade/assignNum',
            num:parseInt(num)+1
        })
    },
    inputNum:(e) => {
        dispatch({
            type:'trade/assignNum',
            num:e.target.value
        })
    },
    chooseType:value => () => {
        dispatch({
            type:'trade/assignPriceType',
            value:value
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

