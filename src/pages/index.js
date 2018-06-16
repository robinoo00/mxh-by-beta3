import React from 'react';
import {connect} from 'dva';
import Login from './login/page';
import Home from './home/page';
import config from '../utils/config'

function IndexPage() {
    return (
        <div>
            {localStorage.getItem(config.KEY) ? <Home/> : <Login/>}
        </div>
    );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
