import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'

const Example = ({choose,nav_index}) => {
    return (
        <ul styleName="title">
            <li onClick={choose(1)}>
                <span styleName={nav_index === 1? "choose" : ""}>推广详情</span>
            </li>
            <li onClick={choose(2)}>
                <span styleName={nav_index === 2? "choose" : ""}>我的用户</span>
            </li>
        </ul>
    );
};

const mapStateToProps = state => ({
    nav_index:state.union.nav_index
})

const mapDispatchToProps = (dispatch,props) => ({
    choose:index => () => {
        dispatch({
            type:'union/assignNavIndex',
            index:index
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

