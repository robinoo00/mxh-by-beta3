import React from 'react'
import router from 'umi/router'
import CSSModules from 'react-css-modules'
import styles from '../styles/trade.css'
import {connect} from 'dva'

let id = 0;
class Detail extends React.Component {
    componentDidMount() {
        const {getPositionList} = this.props;
        id = setInterval(getPositionList, 1000);
    }

    componentWillUnmount() {
        clearInterval(id);
    }
    render(){
        let {earn} = this.props;
        return(
            <div styleName="detail-list">
                <div>持仓盈亏: <span style={earn < 0 ? {color: '#01B28E'} : {color: '#E34C4D'}}>{earn}</span></div>
                <div styleName="trade-details" onClick={() => {router.push({pathname:'/tradeList'})}}>
                    交易明细
                </div>
                {/*<div styleName="trade-details" onClick={() => {router.push({pathname:'/limitList'})}}>*/}
                    {/*挂单明细*/}
                {/*</div>*/}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    earn: state.tradeList.earn
})

const mapDispatchToProps = dispatch => ({
    getPositionList: () => {
        dispatch({
            type: 'tradeList/getPositionList'
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Detail,styles))
