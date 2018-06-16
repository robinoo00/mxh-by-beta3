import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'
import Nav from './nav'
import List from './list'

const Example = ({...rest}) => {
    return (
        <div>
            <Header
                url={'/personal'}
                title={<div onClick={rest.show}
                            styleName={rest.nav_show ? "switch-tip-up" : "switch-tip-down"}>{rest.nav_choose}</div>}
            />
            {rest.nav_show ? <Nav/> : ''}
            <List/>
        </div>
    );
};

const mapStateToProps = state => ({
    nav_show:state.fund.nav_show,
    nav_choose:state.fund.nav_choose
})

const mapDispatchToProps = (dispatch, props) => ({
    show:() => {
        dispatch({
            type:'fund/toggleShow'
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Example, styles))

