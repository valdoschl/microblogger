import React, { Component } from 'react'
import { Redirect}  from 'react-router-dom'
import axios from 'axios'


export default class Login extends Component {
    state = {
        errorMsg: ''
    }

    login = (e) => {
        e.preventDefault()
        const username = document.querySelector('input[name=username]').value
        const password = document.querySelector('input[name=password]').value
        axios.get('/users')
        .then(res => {
            const user = res.data.filter(user => user.username === username)
            if (user.length > 0) {
                if (password === user[0].password) {
                    this.props.login(username)
                } else {
                    this.setState({
                        errorMsg: 'Wrong password'
                    })
                }
            } else {
                this.setState({
                    errorMsg: 'account not found'
                })
            }
        })
    }

    renderErrorMessage() {
        if(this.state.errorMsg.length > 0) {
            return <p>{this.state.errorMsg}</p>
        }
    }

    redirectToMain = () => {
        if (this.props.isLogged) {
            return <Redirect to='/' />
        }
    }
   
    render() {
        return (
            <div id="login-register">
                {this.redirectToMain()}
                <form id="login" onSubmit={this.login} >
                    <input type="text" name="username" placeholder="username"/>
                    <br/>
                    <input type="password" name="password" placeholder="password"/>
                    <br/>
                    <input type="submit" value="login"/>
                </form>
                <a href="/register">Click here to register</a>
                {this.renderErrorMessage()}
            </div>
        )
    }
}