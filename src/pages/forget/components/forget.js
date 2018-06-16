import CSSModules from 'react-css-modules'
import styles from '../../register/styles/register.css'
import {connect} from 'dva'
import Header from '../../../components/header/header'
import Button from '../../../components/button/button'
import router from 'umi/router'
import {createForm} from 'rc-form'

const Forget = ({...rest}) => {
    return (
        <div>
            <Header
                title={'忘记密码'}
                leftCallBack={() => {router.push('/login')}}
            />
            <div styleName="mod-form-wrap" style={{marginTop:'.2rem'}}>
                <div styleName="mod-form">
                    <label>手机号</label><input {...rest.form.getFieldProps('phone', {
                    initialValue: '',
                    rules: [{
                        required: true, message: '请输入手机号码',
                    }],
                })} type="tel" styleName="inp" placeholder="请输入手机号码"/>
                </div>
                <div styleName="mod-form">
                    <span  styleName="tip-r">获取验证码</span>
                    <label>验证码</label><input {...rest.form.getFieldProps('code', {
                    initialValue: '',
                    rules: [{
                        required: true, message: '请输入验证码',
                    }],
                })} type="tel" styleName="inp" placeholder="请输入验证码" style={{width:'1.1rem'}}/>
                </div>
            </div>
            <div styleName="mod-form-wrap" style={{marginTop:'.1rem'}}>
                <div styleName="mod-form">
                    <label>新登录密码</label><input {...rest.form.getFieldProps('password', {
                    initialValue: '',
                    rules: [{
                        required: true, message: '请输入登录密码',
                    },{
                        validator: rest.validatePassword,
                    }],
                })} type="password" styleName="inp" placeholder="6-16位数字和字母组成"/>
                </div>
                <div styleName="mod-form">
                    <label>确认登录密码</label><input {...rest.form.getFieldProps('repassword', {
                    initialValue: '',
                    rules: [{
                        required: true, message: '请再次输入登录密码',
                    },{
                        validator: rest.validateToNextPassword,
                    }],
                })} type="password"  styleName="inp" placeholder="请确认登录密码"/>
                </div>
            </div>
            <div style={{padding:'.3rem .15rem'}}>
                <Button
                    title={'确定'}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch,props) => ({
    validatePassword:(rule, value, callback) => {
        var pwdReg = /^(\w){6,15}$/;
        if (pwdReg.test(value)) {
            callback();
        } else {
            callback('密码只能输入6-15个字母、数字、下划线!');
        }
    },
    validateToNextPassword:(rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码不相同!');
        } else {
            callback();
        }
    },
    submit:() => {

    }
})

export default createForm()(connect(mapStateToProps,mapDispatchToProps)(CSSModules(Forget, styles)))

