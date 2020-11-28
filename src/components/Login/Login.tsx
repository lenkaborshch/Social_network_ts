import React from 'react'
import {Field, FormSubmitHandler, InjectedFormProps, reduxForm} from 'redux-form'
import {useDispatch} from 'react-redux'
import {authLogin} from '../../redux/authReducer'
import {Input} from '../common/formsControl/FormControls'
import {required} from '../../utils/validators/validators'


const LoginForm: React.FC<InjectedFormProps> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='login' component={Input} type='text' placeholder='login'
                       validate={[required]}/>
            </div>
            <div>
                <Field name='password' component={Input} type='text' placeholder='password'
                       validate={[required]}/>
            </div>
            <div>
                <Field name='rememberMe' component={Input} type='checkbox'/>Remember me
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