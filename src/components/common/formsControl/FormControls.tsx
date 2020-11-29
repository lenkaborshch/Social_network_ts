import React from 'react'
import style from './FormControls.module.css'

const FormControl: React.FC<any> = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return (
        <div className={hasError ? style.error : ''}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea: React.FC<any> = (props) => {
    let {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    )
}

export const Input: React.FC<any> = (props) => {
    let {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}