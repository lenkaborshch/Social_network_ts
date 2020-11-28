import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Textarea} from '../../common/formsControl/FormControls'
import {maxLength, required} from '../../../utils/validators/validators'

const maxLength50 = maxLength(50)

const AddMessageForm: React.FC<InjectedFormProps> = (props) => {
    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='newMessageBody' component={Textarea} placeholder='Write your message'
                       validate={[required, maxLength50]}/>
            </div>
            <div>
                <button type='submit'>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'AddMessageForm'})(AddMessageForm)