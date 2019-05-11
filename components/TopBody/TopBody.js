import React from 'react'
import styles from './TopBody.scss'

const { container } = styles;

const TopBody = ({main}) => {
    return (
        <div className={container}>
          <p>{ main }</p>
        </div>
    );
}

export default TopBody;
