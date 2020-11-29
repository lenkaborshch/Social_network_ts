import React from 'react'
import {Field, FormSubmitHandler, InjectedFormProps, reduxForm} from 'redux-form'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../redux/authReducer'
import {Input} from '../common/formsControl/FormControls'
import {required} from '../../utils/validators/validators'
import {AppStateType} from '../../redux/reduxStore'
import {Redirect} from 'react-router-dom'
import style from '../common/formsControl/FormControls.module.css'

const LoginForm: React.FC<InjectedFormProps> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='email' component={Input} type='text' placeholder='login'
                       validate={[required]}/>
            </div>
            <div>
                <Field name='password' component={Input} type='password' placeholder='password'
                       validate={[required]}/>
            </div>
            <div>
                <Field name='rememberMe' component={Input} type='checkbox'/>Remember me
            </div>
            {props.error && <div className={style.commonError}>{props.error}</div>}
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

export const Login = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    if (isAuth) return <Redirect to='/profile'/>

    const onSubmit: FormSubmitHandler = (formData): void => {
        //@ts-ignore
        let {email, password, rememberMe} = formData
        dispatch(login(email, password, rememberMe))
    }

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}