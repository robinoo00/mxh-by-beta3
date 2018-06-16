import CSSModules from 'react-css-modules'
import styles from '../styles/discover.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'
import {Accordion} from 'antd-mobile'
import {removeScrollListener, scrollLoadMore} from "../../../utils/common";
import React from 'react'

class Discover extends React.Component{
    componentDidMount(){
        let {loadMore,getList} = this.props;
        getList();
        scrollLoadMore(() => {
            loadMore()
        })
    }
    componentWillUnmount(){
        removeScrollListener()
    }
    render(){
        const {list} = this.props;
        return(
            <div>
                <Header
                    title={'发现'}
                    back={false}
                />
                <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                    {list.map(item => (
                        <Accordion.Panel header={item.标题} key={item.id}>
                            <div styleName="con-wrap">
                                <div styleName="con">{item.内容}</div>
                                <div styleName="time">{item.时间}</div>
                            </div>
                        </Accordion.Panel>
                    ))}
                </Accordion>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list:state.discover.list
})

const mapDispatchToProps = (dispatch,props) => ({
    getList:() => {
        dispatch({
            type:'discover/getList'
        })
    },
    loadMore:() => {
        dispatch({
            type:'discover/loadMore'
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Discover, styles))

