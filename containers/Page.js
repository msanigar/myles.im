import React, {Component} from 'react'
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
    const { test2 } = this.props
    return (
      <div>
      <Head />
        <p>Redux Store Count: <span>{test2}</span></p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const {test, test2} = state
  return {test, test2}
}

export default connect(mapStateToProps)(Page)
