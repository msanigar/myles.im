import React, { Component } from 'react'
import { connect } from 'react-redux'
import { testAction } from '../redux/actions.js'
import Head from '../components/Head/'

class Page extends Component {

  constructor(props) {
    super(props);
  }

  test = () => {
    const {dispatch} = this.props
    dispatch(testAction())
  }

  componentDidMount = () => {
      const {dispatch} = this.props
      dispatch(testAction())
  }

  render () {
    const { test } = this.props
    return (
      <div>
      <Head />
        <p>Test action works?: <span>{test ? 'yes' : 'no'}</span></p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const {test} = state
  return {test}
}

export default connect(mapStateToProps)(Page)
