import CSSModules from 'react-css-modules'
import styles from './style.css'
import {connect} from 'dva';
import Link from 'umi/link'

const Footer = ({pathname}) => (
    <div>
        <footer styleName="page-footer">
            <div styleName="footer-wrap">
                <ul>
                    <li>
                       <Link to={'/home'} styleName="home-icon" style={pathname === '/home' || pathname === '/' ? {color:' #ef4f45'} : {}}>首页</Link>
                    </li>
                    <li>
                        <Link to={'/news'} styleName="msg-icon" style={pathname === '/news' ? {color:' #ef4f45'} : {}}>资讯</Link>
                    </li>
                    <li>
                        <Link to={'/discover'} styleName="find-icon" style={pathname === '/discover' ? {color:' #ef4f45'} : {}}>发现</Link>
                    </li>
                    <li>
                        <Link to={'/personal'} styleName="my-icon" style={pathname === '/personal' ? {color:' #ef4f45'} : {}}>我的</Link>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
)

const mapStateToProps = state =>({
    pathname:state.routing.location.pathname
})

export default connect(mapStateToProps)(CSSModules(Footer,styles))
