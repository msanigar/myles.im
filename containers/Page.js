import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setDarkModeAction } from '../redux/actions.js'
import Head from '../components/Head/'

class Page extends Component {

  constructor(props) {
    super(props);
  }

  triggerToggleDarkMode = () => {
    const { setDarkModeAction } = this.props
    setDarkModeAction()
  }

  render() {
    const { darkmode } = this.props;
    return (
      <div style={{backgroundColor: darkmode ? `#d7d7d7` : `#f7f7f7`}}>
        <Head />
        <a onClick={() => this.triggerToggleDarkMode()}>enable dark mode</a>
        <p>{darkmode ? `ya boi dark mode` : ``}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { darkmode } = state
  return { darkmode }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setDarkModeAction }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)