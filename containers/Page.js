import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from '../components/Head/'
import TopBody from '../components/TopBody/'

class Page extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { main } = this.props.data

    return (
      <div>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
        </Head>
        <TopBody main={main} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { data } = state
  return { data }
}

export default connect(
  mapStateToProps
)(Page)