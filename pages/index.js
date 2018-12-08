import React from 'react'
import {connect} from 'react-redux'
import {getData, testAction} from '../redux/actions.js'
import Page from '../containers/Page'

import '../styles/global.scss'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    return reduxStore.dispatch(getData(isServer))
  }

  componentDidMount () {
    const {dispatch} = this.props
    this.incremement = testAction(dispatch)
  }

  render () {
    return (
      <Page />
    )
  }
}

export default connect()(Index)
