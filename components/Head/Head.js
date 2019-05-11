import React from 'react'
import styles from './Head.scss'
import Logo from '../../images/svg/logo.svg'

const { container, logo } = styles;

const Head = () => {
  return (
    <div className={container}>
      <Logo className={logo} />
    </div>
  );
}

export default Head;