import React from 'react'
import styles from './Head.scss'
import Logo from '../../images/svg/logo.svg'

const { container } = styles;

const Head = () => {
    return (
        <div className={container}>
        <Logo style={{width: '500px', height: '500px'}} />
        </div>
    );
}

export default Head;