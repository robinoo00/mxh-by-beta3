import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'
import {List} from 'antd-mobile'
const Item = List.Item;

const Example = ({data}) => {
    return (
        <div>
            <Header
                title={'账户明细'}
            />
            {data.map((item,index) => (
                <Item
                    key={'capital_'+index}
                    extra={item.value}
                >{item.title}</Item>
            ))}
        </div>
    );
};

const mapStateToProps = state => ({
    data:state.capital.data
})

const mapDispatchToProps = (dispatch,props) => ({
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

