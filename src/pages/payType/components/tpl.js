import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'
import Iframe from 'react-iframe'
import config from '../../../utils/config'

const Example = ({account,test}) => {
    return (
        <div>
            {test()}
            <Header
                title={'账户充值'}
                url={'/personal'}
            />
            <Iframe
                url={`http://800.hdlkg.net/index/capital?account=${account}`}
                width={document.body.clientWidth + "px"}
                height={window.screen.availHeight - 50 + "px"}
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen/>
        </div>
    );
};

const mapStateToProps = state => ({
    account:state.personal.data.账号 ? state.personal.data.账号 : sessionStorage.getItem(config.ACCOUNT)
})

const mapDispatchToProps = (dispatch,props) => ({
    test:() => {
        const height = window.screen.availHeight
        console.log(height)
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

