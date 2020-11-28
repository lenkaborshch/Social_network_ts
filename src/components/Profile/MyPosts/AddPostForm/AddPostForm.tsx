import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Textarea} from '../../../common/formsControl/FormControls'
import {maxLength, required} from '../../../../utils/validators/validators'

const maxLength20 = maxLength(20)

const AddPostForm: React.FC<InjectedFormProps> = (props) => {
    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} placeholder='Write your post message'
                       validate={[required, maxLength20]}/>
            </div>
            <div>
                <button type='submit'>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'AddPostForm'})(AddPostForm)