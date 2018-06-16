import CSSModules from 'react-css-modules'
// import styles from '../styles/login.css'
import {connect} from 'dva'
// import Header from '../../../components/header/header'

const Example = () => {
  return (
    <div>
      Example
    </div>
  );
};

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch,props) => ({
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Example, styles))

