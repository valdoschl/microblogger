import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect} from 'react-router-dom'
import {Route} from 'react-router'


import Posts from './components/posts-component'
import Login from './components/login-component'


export default class App extends Component {
  state = {
    isLogged: false,
    user: ''
  }

  redirectToLogin = () => {
    if (!this.state.isLogged) {
      return <Redirect to='/login' />
    }
  }

  login = (user) => {
    this.setState({
      isLogged: true,
      user
    })
  }
  
  render() {
      return (
          <Router>
            <div className="container">
              {this.redirectToLogin()}
              <Route exact path="/" render={
                (routeProps) => (<Posts {...routeProps} user={this.state.user} />)
              } />
              <Route path="/login" render={
                (routeProps) => (<Login {...routeProps} login={this.login} isLogged={this.state.isLogged} />)
              } />
            </div>
          </Router>
      )
  }
}
