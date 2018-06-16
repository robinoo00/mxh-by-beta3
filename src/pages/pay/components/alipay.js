import CSSModules from 'react-css-modules'
import styles from '../styles/tpl.css'
import {connect} from 'dva'
import {InputItem, WhiteSpace, List} from 'antd-mobile'
import {createForm} from 'rc-form'
import Button from '../../../components/button/button'
import config from '../../../utils/config'
import {Toast} from 'antd-mobile'

const Example = ({form, account, submit}) => {
    return (
        <div>
            <List>
                {/*<InputItem*/}
                {/*defaultValue={'0.00元'}*/}
                {/*editable={false}*/}
                {/*>*/}
                {/*账户余额：*/}
                {/*</InputItem>*/}
                {/*<WhiteSpace size={'lg'} style={{backgroundColor:'#20212b'}}/>*/}
                {/*<InputItem*/}
                {/*{...form.getFieldProps('account', {*/}
                {/*initialValue: account*/}
                {/*})}*/}
                {/*editable={false}*/}
                {/*>*/}
                {/*账号*/}
                {/*</InputItem>*/}
                <InputItem
                    {...form.getFieldProps('aliAccount', {
                        initialValue: '',
                        rules: [{
                            required: true, message: '请输入支付宝账号'
                        }]
                    })}
                    placeholder={'请输入支付宝账号'}
                >
                    支付宝账号
                </InputItem>
                <InputItem
                    {...form.getFieldProps('money', {
                        initialValue: '',
                        rules: [{
                            required: true, message: '请输入金额'
                        }]
                    })}
                    type={'money'}
                    moneyKeyboardAlign={'left'}
                    placeholder={'请输入金额'}
                >
                    充值金额
                </InputItem>
            </List>
            <div style={{padding: '.3rem .15rem'}}>
                <Button
                    title={'提交'}
                    callBack={submit}
                />
            </div>
            {/*<div styleName="mod-prompt">*/}
            {/*<p styleName="txt-center">注意</p>*/}
            {/*<p>目前云闪付支持单卡单笔5000单日2万</p>*/}
            {/*<p>金额请与云闪付支付时金额一致</p>*/}
            {/*</div>*/}
            {/*<div styleName="mod-prompt">*/}
            {/*<p styleName="txt-center">到账时间</p>*/}
            {/*<p> 08:30-17:30<span styleName="fr">(1小时内到账)</span></p>*/}
            {/*<p>17:30以后<span styleName="fr">(次日09:30前到账)</span></p>*/}
            {/*<p>如急需到账，请电话<a styleName="txt-blue" href={"tel:"+config.SERVICE_TEL}>联系客服</a>。</p>*/}
            {/*</div>*/}
        </div>
    );
};

const mapStateToProps = state => ({
    headerText: state.pay.headerText,
    account: state.personal.data.账号 ? state.personal.data.账号 : sessionStorage.getItem(config.ACCOUNT),
})

const mapDispatchToProps = (dispatch, props) => ({
    submit: () => {
        props.form.validateFields({force: true}, (error) => {
            if (!error) {
                let value = props.form.getFieldsValue();
                const params = {
                    money: value.money,
                    alipay: value.aliAccount,
                    tongdao: 0,
                    account: localStorage.getItem(config.ACCOUNT)
                }
                dispatch({
                    type: 'pay/submit',
                    params: params
                })
            } else {
                const errors = Object.values(error);
                Toast.info(errors[0]['errors'][0]['message'], 1);
            }
        });
    }
})

export default createForm()(connect(mapStateToProps, mapDispatchToProps)(CSSModules(Example, styles)))

