import React from 'react'
import {Field, FormSubmitHandler, InjectedFormProps, reduxForm} from 'redux-form'
import {useDispatch} from 'react-redux'
import {authLogin} from '../../redux/authReducer'


const LoginForm: React.FC<InjectedFormProps> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='login' component='input' type='text' placeholder='login'/>
            </div>
            <div>
                <Field name='password' component='input' type='text' placeholder='password'/>
            </div>
            <div>
                <Field name='rememberMe' component='input' type='checkbox'/>Remember me
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

export const Login = () => {
    const dispatch = useDispatch()
    const onSubmit: FormSubmitHandler = (formData): void => {
        //@ts-ignore
        let {login, password, rememberMe} = formData
        dispatch(authLogin(login, password, rememberMe))
    }
    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}