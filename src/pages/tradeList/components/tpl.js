import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'
import Nav from './nav'
import PositonList from './position-list'
import ClearList from './clear-list'
import DealList from './deal-list'
import HistoryList from './history-list'
import React from 'react'

class Example extends React.Component{
    componentWillMount(){
        // window.hideK();
    }
    render(){
        const {nav_index} = this.props;
        return(
            <div>
                <Header
                    title={'交易明细'}
                />
                <Nav/>
                {nav_index === 1 ? <PositonList/> : ''}
                {nav_index === 2 ? <ClearList/> : ''}
                {nav_index === 3 ? <DealList/> : ''}
                {nav_index === 4 ? <HistoryList/> : ''}
            </div>
        )
    }
}

// const Example = ({nav_index}) => {
//     return (
//         <div>
//             <Header
//                 title={'交易明细'}
//             />
//             <Nav/>
//             {nav_index === 1 ? <PositonList/> : ''}
//             {nav_index === 2 ? <ClearList/> : ''}
//             {nav_index === 3 ? <DealList/> : ''}
//             {nav_index === 4 ? <HistoryList/> : ''}
//         </div>
//     );
// };

const mapStateToProps = state => ({
    nav_index:state.tradeList.nav_index
})

const mapDispatchToProps = (dispatch,props) => ({
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

