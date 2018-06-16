import {ActivityIndicator} from 'antd-mobile'

const BottomTip = ({nomore = false}) => (
    <div>
        {!nomore ? <div style={{display:'flex',justifyContent:'center'}}><ActivityIndicator color={"#fff"} text="正在加载..." /></div> :
            <div style={{
                width: '100%',
                height: '0.75rem',
                lineHeight: '0.75rem',
                textAlign: 'center',
                background: 'rgb(230, 230, 231)',
                fontSize: '0.24rem',
                color: '#fff',
                marginTop: '-0.2rem'
            }}>我也是有底线的</div>
        }
    </div>
)

export default BottomTip
