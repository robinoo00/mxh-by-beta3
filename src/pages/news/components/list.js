import CSSModules from 'react-css-modules'
import styles from '../styles/news.css'
import {connect} from 'dva'
import React from 'react'
import {removeScrollListener, scrollLoadMore} from "../../../utils/common";

class NewsList extends React.Component{
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
            <div styleName="mod-news-wrap">
                <div styleName="timecon">
                    <ul styleName="livecon">
                        {list.map(item => (
                            <li key={item.id}>
                                <div>
                                    <div styleName="timeline">
                                        <div styleName="dotbg">
                                            <div styleName="dot"></div>
                                        </div>
                                        <div styleName="time">{item.时间}</div>
                                    </div>
                                    <div styleName="onlytxt">
                                        <div>
                                            <div dangerouslySetInnerHTML={{
                                                __html: item.内容
                                            }}></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list:state.news.list
})

const mapDispatchToProps = (dispatch, props) => ({
    getList:() => {
      dispatch({
          type:'news/getList'
      })
    },
    loadMore:() => {
        dispatch({
            type:'news/loadMore'
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(NewsList, styles))

