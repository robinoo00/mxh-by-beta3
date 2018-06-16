import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'
import Nav from './nav'
import Detail from './detail'
import List from './list'

const Example = ({nav_index}) => {
    return (
        <div>
            <Header
                title={'推广赚钱'}
                url={'/personal'}
            />
            <Nav/>
            {nav_index === 1? <Detail/> : ''}
            {nav_index === 2? <List/> : ''}
        </div>
    );
};

const mapStateToProps = state => ({
    nav_index:state.union.nav_index
})

const mapDispatchToProps = (dispatch,props) => ({
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

