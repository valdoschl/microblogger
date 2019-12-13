import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect} from 'react-router-dom'
import {Route} from 'react-router'


import Posts from './components/posts-component'
import Login from './components/login-component'
import Register from './components/register-component'


export default class App extends Component {
  state = {
    isLogged: false,
    user: ''
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
              <Route exact path="/" render={
                (routeProps) => {
                  if(this.state.isLogged) {
                    return <Posts {...routeProps} user={this.state.user} />
                  } else {
                    return <Redirect to='/login' />
                  }
                }
              } />
              <Route path="/login" render={
                (routeProps) => (<Login {...routeProps} login={this.login} isLogged={this.state.isLogged} />)
              } />
              <Route path="/register" component={Register} />
            </div>
          </Router>
      )
  }
}
