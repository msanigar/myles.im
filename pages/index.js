import React from 'react'
import { getDataAction } from '../redux/actions.js'
import Page from '../containers/Page'

import '../styles/global.scss'

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req
    return reduxStore.dispatch(getDataAction(isServer))
  }

  render() {
    return (
      <Page />
    )
  }
}

export default Index
