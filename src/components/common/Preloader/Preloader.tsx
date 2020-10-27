import React from 'react'
import preloader from '../../../img/preloader.svg'

export const Preloader = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}