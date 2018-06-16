import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'
import {List,Switch} from 'antd-mobile'

const Example = ({...rest}) => {
    return (
        <div>
            <Header
                title={'设置'}
            />
            <List.Item
                extra={<Switch
                    onClick={rest.assignTrade}
                    checked={rest.trade}
                />}
            >交易需确认</List.Item>
        </div>
    );
};

const mapStateToProps = state => ({
    trade:state.setting.trade
})

const mapDispatchToProps = (dispatch,props) => ({
    assignTrade:(checked) => {
        dispatch({
            type:'setting/assignTrade',
            checked:checked
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

