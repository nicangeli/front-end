import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as authActions } from '../redux/modules/auth'

const mapStateToProps = (state) => ({

})
export class LoginView extends Component {
  login () {
    const username = this.refs.username.value
    const password = this.refs.password.value
  }
  render () {
    return (
      <div>
        <input type='text' ref='username' />
        <input type='password' ref='password' />
        <input type='button' onClick={this.login.bind(this)} />
      </div>
    )
  }
}

export default connect(mapStateToProps, authActions)(LoginView)
