import React from 'react'
import styles from './Head.scss'

const { container } = styles;

const Head = () => {
  return (
    <div className={container}>
      <h1>hi, i'm <span>myles</span>.</h1>
    </div>
  );
}

export default Head;