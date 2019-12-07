import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect} from 'react-router-dom'
import {Route} from 'react-router'
import './styles/posts.css'

import Posts from './components/posts-component'
import Login from './components/login-component'


export default class App extends Component {
  state = {
    isLogged: true
  }

  redirectToLogin = () => {
    if (!this.state.isLogged) {
      return <Redirect to='/login' />
    }
  }

  
  
  render() {
      return (
          <Router>
            <div className="container">
              {this.redirectToLogin()}
              <Route path="/" exact component={Posts} />
              <Route path="/login" component={Login} />
            </div>
          </Router>
      )
  }
}
