import CSSModules from 'react-css-modules'
import styles from '../styles/form.css'

const Item = ({data,getFieldProps}) => (
    <div styleName="mod-form">
        <div styleName="td1">{data.title}</div>
        <div>
            <input {...getFieldProps(data.name, {
                initialValue: '',
                rules: [{
                    required: true, message: '请输入' + data.title,
                }],
            })} type="text" styleName="inp" style={{lineHeight:'18px'}} placeholder={'请输入' + data.title}/>
        </div>
    </div>
)


export default CSSModules(Item,styles)
