import React from 'react'
import {connect} from 'dva'
import CSSModules from 'react-css-modules'
import styles from '../styles/position.css'
import router from 'umi/router'
import arrow_icon from '../images/arrow.png'

let id = 0;

class Position extends React.Component {
    componentWillMount() {
        const {getPositionList} = this.props;
        id = setInterval(getPositionList, 1000);
    }

    componentDidMount() {
        const arrow = document.getElementById("arrow");
        const wrap = document.getElementById("pos-wrap");
        const han = new window.Hammer.Manager(arrow);
        const pan = new window.Hammer.Pan();
        const pinch = new window.Hammer.Pinch();
        const press = new window.Hammer.Press();
        han.add([pan, pinch, press]);
        han.on("panup", function (e) {
            let y = e.changedPointers[0].pageY;
            if (y <= 20) y = 20;
            wrap.style.top = y + 'px';
        });
        const height = document.body.offsetHeight;
        han.on("pandown", function (e) {
            let y = e.changedPointers[0].pageY;
            if (height - y < 60) y = height - 60;
            wrap.style.top = y + 'px';
        });
    }

    componentWillUnmount() {
        clearInterval(id);
    }

    render() {
        const {list} = this.props;
        return (
            <div styleName="position" id={'pos-wrap'}>
                <div styleName="arrow" id={"arrow"}>
                    <img src={arrow_icon}/>
                </div>
                <div styleName="con">
                    <div styleName="header">
                        <div>当前持仓</div>
                        <div styleName="ping" onClick={() => {
                            router.push({pathname: '/tradeList'})
                        }}>去平仓
                        </div>
                    </div>
                    <table styleName="table">
                        <tbody>
                        <tr>
                            <td>合约</td>
                            <td>买卖</td>
                            <td>持仓</td>
                            <td>开仓均价</td>
                            <td>持仓盈亏</td>
                        </tr>
                        {list.map((item, index) => (
                            <tr key={'home_po_' + index}
                                style={item['7'] < 0 ? {color: '#01B28E'} : {color: '#E34C4D'}}>
                                <td>{item[2]}</td>
                                <td>{item[3] === 0 ? '买入' : '卖出'}</td>
                                <td>{item[4]}</td>
                                <td>{item[5]}</td>
                                <td>{item[7]}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list: state.tradeList.position_list
})

const mapDispatchToProps = dispatch => ({
    getPositionList: () => {
        dispatch({
            type: 'tradeList/getPositionList'
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Position, styles))
